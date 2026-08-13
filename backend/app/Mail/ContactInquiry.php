<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactInquiry extends Mailable
{
    use Queueable, SerializesModels;

    private const BRIEF_LABELS = [
        'projectType' => 'Project Type',
        'serviceInterest' => 'Service Interest',
        'layoutStatus' => 'Design / Layout Status',
        'budget' => 'Estimated Budget',
        'timeline' => 'Timeline',
    ];

    private const BRIEF_OPTION_LABELS = [
        'projectType' => [
            'new' => 'Brand New Project',
            'upgrade' => 'Upgrading an Existing One',
            'unsure' => 'Not Sure Yet',
        ],
        'serviceInterest' => [
            'software' => 'Software or a System',
            'website' => 'Website',
            'networking' => 'Computer Networking',
            'graphics' => 'Graphics Design',
            'mixed' => 'More Than One / Not Sure Yet',
        ],
        'layoutStatus' => [
            'ready' => "Yes, It's Ready",
            'idea' => 'I Have an Idea, Need Guidance',
            'none' => 'No, DataSoft Should Give Me Options',
        ],
        'budget' => [
            'under-500k' => 'Under TZS 500,000',
            '500k-2m' => 'TZS 500,000 – 2,000,000',
            '2m-5m' => 'TZS 2,000,000 – 5,000,000',
            'above-5m' => 'Above TZS 5,000,000',
            'unsure' => 'Not Sure Yet, Need Advice',
        ],
        'timeline' => [
            'urgent' => 'As Soon as Possible (2 Weeks)',
            '1month' => 'Within 1 Month',
            '1to3months' => '1 – 3 Months',
            'flexible' => 'No Rush, Quality First',
        ],
    ];

    /**
     * @param  array{fullName: string, email: string, orgName: ?string, project: string, projectType: ?string, serviceInterest: ?string, layoutStatus: ?string, budget: ?string, timeline: ?string}  $fields
     */
    public function __construct(private readonly array $fields)
    {
    }

    public function envelope(): Envelope
    {
        $envelope = new Envelope(
            subject: "New Project Inquiry — {$this->fields['fullName']}",
        );

        if (filter_var($this->fields['email'], FILTER_VALIDATE_EMAIL)) {
            $envelope->replyTo($this->fields['email']);
        }

        return $envelope;
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.contact',
            with: [
                'fields' => $this->fields,
                'briefRows' => $this->briefRows(),
                'submittedAt' => now()->timezone('Africa/Dar_es_Salaam')->format('l, j F Y, H:i'),
            ],
        );
    }

    /** @return array<int, array{label: string, value: string}> */
    private function briefRows(): array
    {
        $rows = [];

        foreach (self::BRIEF_LABELS as $key => $label) {
            $rawValue = $this->fields[$key] ?? null;

            if (! $rawValue) {
                continue;
            }

            $rows[] = [
                'label' => $label,
                'value' => self::BRIEF_OPTION_LABELS[$key][$rawValue] ?? $rawValue,
            ];
        }

        return $rows;
    }
}
