@php
    $brand = [
        'sapphireDeep' => '#0D2C4E',
        'sapphireRaised' => '#163F6D',
        'sapphireLine' => '#2C5A8C',
        'brass' => '#D4A017',
        'brassBright' => '#F0C550',
        'brassDim' => '#8A6B12',
        'navyDeep' => '#071427',
        'navyRaised' => '#0F2340',
        'navyLine' => '#1F3F66',
        'ivory' => '#FBF6E7',
        'ivoryCard' => '#FFFFFF',
        'bone' => '#E9DFC4',
        'ink' => '#17201A',
        'inkSoft' => '#59645C',
    ];
    $fontBody = "'Montserrat',Arial,sans-serif";
    $fontDisplay = "Georgia,'Times New Roman',serif";
@endphp
<!doctype html>
<html lang="sw">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="light" />
    <title>DataSoft Tanzania</title>
  </head>
  <body style="margin:0;padding:0;background-color:{{ $brand['bone'] }};">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;font-size:1px;line-height:1px;color:{{ $brand['bone'] }};">
      New project inquiry from {{ $fields['fullName'] }}
    </div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:{{ $brand['bone'] }};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background-color:{{ $brand['ivoryCard'] }};border-radius:12px;overflow:hidden;box-shadow:0 20px 50px rgba(13,44,78,0.18);">

            <!-- Brand bar -->
            <tr>
              <td style="background-color:{{ $brand['sapphireDeep'] }};padding:22px 40px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td width="40" style="padding-right:12px;">
                      <table role="presentation" cellpadding="0" cellspacing="0" width="40" height="40" style="background-color:{{ $brand['sapphireRaised'] }};border:1px solid {{ $brand['sapphireLine'] }};border-radius:8px;">
                        <tr>
                          <td align="center" valign="middle" style="font-family:{{ $fontDisplay }};font-size:19px;color:{{ $brand['brass'] }};font-style:italic;">D</td>
                        </tr>
                      </table>
                    </td>
                    <td valign="middle">
                      <span style="font-family:{{ $fontBody }};font-size:18px;font-weight:700;color:{{ $brand['ivory'] }};letter-spacing:-0.2px;">DataSoft <span style="color:{{ $brand['brass'] }};">Tanzania</span></span><br />
                      <span style="font-family:{{ $fontBody }};font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:1.6px;color:{{ $brand['sapphireLine'] }};">Suluhisho za Teknolojia</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Hero band -->
            <tr>
              <td style="background:linear-gradient(135deg,{{ $brand['sapphireRaised'] }} 0%,{{ $brand['sapphireDeep'] }} 65%);padding:34px 40px 30px;border-bottom:3px solid {{ $brand['brass'] }};">
                <p style="margin:0 0 14px;font-family:{{ $fontBody }};font-size:11px;letter-spacing:1.8px;text-transform:uppercase;color:{{ $brand['brassBright'] }};font-weight:700;">Internal Notification</p>
                <h1 style="margin:0;font-family:{{ $fontDisplay }};font-weight:400;font-size:25px;line-height:1.32;color:{{ $brand['ivory'] }};">New Project Inquiry</h1>
                <p style="margin:14px 0 0;font-family:{{ $fontBody }};font-size:14px;line-height:1.6;color:{{ $brand['sapphireLine'] }};max-width:440px;">A visitor submitted the brief form on datasoft.co.tz — details below.</p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:38px 40px 8px;font-family:{{ $fontBody }};font-size:15px;line-height:1.7;color:{{ $brand['ink'] }};">

                <p style="margin:0 0 14px;font-family:{{ $fontBody }};font-size:11px;letter-spacing:1.8px;text-transform:uppercase;color:{{ $brand['brassDim'] }};font-weight:700;">Client Details</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
                  <tr>
                    <td style="padding:10px 0;width:38%;font-family:{{ $fontBody }};font-size:13px;color:{{ $brand['inkSoft'] }};vertical-align:top;">Full Name</td>
                    <td style="padding:10px 0;font-family:{{ $fontBody }};font-size:15px;color:{{ $brand['ink'] }};font-weight:600;vertical-align:top;">{{ $fields['fullName'] }}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;width:38%;font-family:{{ $fontBody }};font-size:13px;color:{{ $brand['inkSoft'] }};vertical-align:top;">Phone / Email</td>
                    <td style="padding:10px 0;font-family:{{ $fontBody }};font-size:15px;color:{{ $brand['ink'] }};font-weight:600;vertical-align:top;">{{ $fields['email'] }}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;width:38%;font-family:{{ $fontBody }};font-size:13px;color:{{ $brand['inkSoft'] }};vertical-align:top;">Organisation</td>
                    <td style="padding:10px 0;font-family:{{ $fontBody }};font-size:15px;color:{{ $brand['ink'] }};font-weight:600;vertical-align:top;">{{ ($fields['orgName'] ?? null) ?: '—' }}</td>
                  </tr>
                </table>

                @if (count($briefRows))
                  <div style="margin:22px 0 8px;">
                    <p style="margin:0 0 14px;font-family:{{ $fontBody }};font-size:11px;letter-spacing:1.8px;text-transform:uppercase;color:{{ $brand['brassDim'] }};font-weight:700;">Project Brief</p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      @foreach ($briefRows as $row)
                        <tr>
                          <td style="padding:14px 0;border-bottom:1px solid {{ $brand['bone'] }};">
                            <p style="margin:0 0 4px;font-family:{{ $fontBody }};font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:{{ $brand['brassDim'] }};font-weight:700;">{{ $row['label'] }}</p>
                            <p style="margin:0;font-family:{{ $fontBody }};font-size:15px;color:{{ $brand['ink'] }};font-weight:600;">{{ $row['value'] }}</p>
                          </td>
                        </tr>
                      @endforeach
                    </table>
                  </div>
                @endif

                <div style="margin:22px 0 4px;">
                  <p style="margin:0 0 14px;font-family:{{ $fontBody }};font-size:11px;letter-spacing:1.8px;text-transform:uppercase;color:{{ $brand['brassDim'] }};font-weight:700;">Project Details</p>
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="background-color:#ffffff;border:1px solid #e9dfc4;border-left:3px solid #d4a017;border-radius:8px;padding:18px 20px;font-family:{{ $fontBody }};font-size:15px;line-height:1.6;color:{{ $brand['ink'] }};white-space:pre-wrap;">{{ $fields['project'] }}</td>
                    </tr>
                  </table>
                </div>

              </td>
            </tr>

            <tr>
              <td style="padding:26px 40px 0;">
                <div style="height:1px;background-color:{{ $brand['bone'] }};"></div>
              </td>
            </tr>

            <!-- Closing register (navy) -->
            <tr>
              <td style="background:linear-gradient(165deg,{{ $brand['navyRaised'] }} 0%,{{ $brand['navyDeep'] }} 70%);padding:32px 40px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="font-family:{{ $fontBody }};font-size:13px;line-height:1.8;color:#9FB4CC;">
                      <strong style="color:{{ $brand['ivory'] }};font-size:14px;">DataSoft Tanzania</strong><br />
                      Nyumba Na. 640, Barabara ya Medical Research,<br />
                      Kitangiri, Ilemela, Mwanza, Tanzania.<br />
                      <a href="tel:+255767887999" style="color:{{ $brand['brass'] }};text-decoration:none;">+255 767 887 999</a>
                      &nbsp;&middot;&nbsp;
                      <a href="mailto:info@datasoft.co.tz" style="color:{{ $brand['brass'] }};text-decoration:none;">info@datasoft.co.tz</a>
                      &nbsp;&middot;&nbsp;
                      <a href="https://www.datasoft.co.tz" style="color:{{ $brand['brass'] }};text-decoration:none;">datasoft.co.tz</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top:20px;border-top:1px solid {{ $brand['navyLine'] }};margin-top:20px;">
                      <p style="margin:16px 0 0;font-family:{{ $fontDisplay }};font-style:italic;font-size:12.5px;color:#7C93AE;text-align:center;letter-spacing:0.2px;">
                        &ldquo;Tunageuza Mawazo Kuwa Uhalisia wa Kidijitali.&rdquo;
                      </p>
                      <p style="margin:14px 0 0;font-family:{{ $fontBody }};font-size:11px;color:#5D7896;text-align:center;">Submitted {{ $submittedAt }} (East Africa Time) · Sent automatically from the contact form at datasoft.co.tz</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
