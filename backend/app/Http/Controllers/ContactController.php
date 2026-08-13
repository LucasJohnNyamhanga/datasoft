<?php

namespace App\Http\Controllers;

use App\Mail\ContactInquiry;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $fields = $request->validate([
            'fullName' => ['required', 'string', 'max:255', 'regex:/\S/'],
            'email' => ['required', 'string', 'max:255', function ($attribute, $value, $fail) {
                $isEmail = filter_var($value, FILTER_VALIDATE_EMAIL) !== false;
                $isPhoneLike = preg_match('/^[+()\-\s\d]+$/', trim($value)) === 1
                    && strlen(preg_replace('/\D/', '', $value)) >= 7;

                if (! $isEmail && ! $isPhoneLike) {
                    $fail('The '.$attribute.' field must be a valid email address or phone number.');
                }
            }],
            'orgName' => ['nullable', 'string', 'max:255', 'regex:/\S/'],
            'project' => ['required', 'string', 'max:5000', 'regex:/\S/'],
            'projectType' => ['nullable', 'string', 'max:100'],
            'serviceInterest' => ['nullable', 'string', 'max:100'],
            'layoutStatus' => ['nullable', 'string', 'max:100'],
            'budget' => ['nullable', 'string', 'max:100'],
            'timeline' => ['nullable', 'string', 'max:100'],
        ]);

        try {
            Mail::to(config('mail.contact_recipient'))->send(new ContactInquiry($fields));
        } catch (\Throwable $e) {
            Log::error('Contact form mail failed', ['error' => $e->getMessage()]);

            return response()->json(['message' => 'Mail Sent Failed, Try Later.', 'success' => false]);
        }

        return response()->json(['message' => 'Mail Sent Successful', 'success' => true]);
    }
}
