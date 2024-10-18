/* eslint-disable prettier/prettier */
export function registrationCodeTemplate(full_name: string, code: string) {
    return `<!DOCTYPE html> <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Static Template</title>
  
      <style>
        /* * {
          border: 1px solid red;
        } */
        .body {
          font-family: sans-serif;
          max-width: 600px;
          min-width: 375px;
          padding: 30px 60px;
          margin: 0 auto;
        }
        .logo {
          margin-left: auto;
          margin-right: auto;
          display: inline-block;
          width: 150px;
        }
        .content {
          min-height: 200px;
          padding-top: 50px;
          padding-bottom: 50px;
          font-size: 12px;
          color: #374b58;
        }
  
        .follow-us {
          color: #374b58;
          font-size: 11px;
          font-weight: 700px;
        }
        .copyright-text {
          text-align: center;
          color: #006be5;
          font-weight: 600;
          font-size: 10px;
        }
        .footer-text {
          text-align: left;
          color: #374b58;
          font-size: 10px;
          font-weight: 400px;
        }
        .unsubscribe-text {
          display: inline-block;
          padding-top: 20px;
          padding-bottom: 20px;
          color: #006be5;
          font-size: 11px;
          text-decoration: underline;
          font-weight: 600;
        }
        .follow-table {
          margin: 0 auto;
          border-spacing: 10px;
        }
      </style>
    </head>
    <body>
      <table class="body">
        <tr class="" align="center">
          <td>
           <!-- <img src="" alt="logo"> -->
          </td>
        </tr>
        <tr>
          <td>
            <div class="content">
              <p>Dear ${full_name},</p>
               <br>
               <p>Thank you for creating an account with Bootiq. To ensure the security of your account, please verify your email address by inputting the code
               ${code}, the code is valid for 10 minutes. If you have any questions or need assistance, please don't hesitate to contact our support team at contact@bootiq.com.
                Welcome to Bootiq!
                . 
               </p>
               <p> 
                   &mdash; Best regards!<br>  
                   The Bootiq Team
                </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
      <!--      <table class="footer">
              <tr>
                <td class="copyright-text">
                  Copyright (c) 2023 Bootiq.
                </td>
              </tr>
              <tr align="center">
              <table class="follow-table">
                  <tr>
                    <td>Follow us:</td>
                    <td>
                      <a href="">
                         <img src="" alt="facebook">
                      </a>
                    </td>
                    <td>
                      <a href="">
                      <img src="" alt="twitter">
                      </a>
                    </td>
                    <td>
                      <a href="">
                      <img src="" alt="instagram">
                      </a>
                    </td>
                  </tr>
                </table>
              </tr>
              <tr>
                <td class="footer-text">
                  You've received this email because you created an account with
                  us and are signed up to receive email updates from Bootiq
                </td>
              </tr>
              <tr>
                <td class="footer-text" style="padding-top: 8px;">
                  Update your email preferences to choose what types of emails you
                  receive
                </td>
              </tr>
              <tr>
                <td style="text-align: center;">
                  <a class="unsubscribe-text">
                    Unsubscribe from all marketing emails
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table> -->
    </body>
  </html>`;
  }


  export function withdrawalTemplate(full_name: string, amount: number) {
    return `<!DOCTYPE html> <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Static Template</title>
  
      <style>
        /* * {
          border: 1px solid red;
        } */
        .body {
          font-family: sans-serif;
          max-width: 600px;
          min-width: 375px;
          padding: 30px 60px;
          margin: 0 auto;
        }
        .logo {
          margin-left: auto;
          margin-right: auto;
          display: inline-block;
          width: 150px;
        }
        .content {
          min-height: 200px;
          padding-top: 50px;
          padding-bottom: 50px;
          font-size: 12px;
          color: #374b58;
        }
  
        .follow-us {
          color: #374b58;
          font-size: 11px;
          font-weight: 700px;
        }
        .copyright-text {
          text-align: center;
          color: #006be5;
          font-weight: 600;
          font-size: 10px;
        }
        .footer-text {
          text-align: left;
          color: #374b58;
          font-size: 10px;
          font-weight: 400px;
        }
        .unsubscribe-text {
          display: inline-block;
          padding-top: 20px;
          padding-bottom: 20px;
          color: #006be5;
          font-size: 11px;
          text-decoration: underline;
          font-weight: 600;
        }
        .follow-table {
          margin: 0 auto;
          border-spacing: 10px;
        }
      </style>
    </head>
    <body>
      <table class="body">
        <tr class="" align="center">
          <td>
           <!-- <img src="" alt="logo"> -->
          </td>
        </tr>
        <tr>
          <td>
            <div class="content">
              <p>Dear ${full_name},</p>
               <br>
              <p>${amount} has been withdrawn from your wallet, If this was not you or you have any questions and need assistance, please don't hesitate to contact our support team at contact@bootiq.com.
                Thank you for choosing Bootiq!
                . 
               </p>
               <p> 
                   &mdash; Best regards!<br>  
                   The Bootiq Team
                </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
      <!--      <table class="footer">
              <tr>
                <td class="copyright-text">
                  Copyright (c) 2023 Bootiq.
                </td>
              </tr>
              <tr align="center">
              <table class="follow-table">
                  <tr>
                    <td>Follow us:</td>
                    <td>
                      <a href="">
                         <img src="" alt="facebook">
                      </a>
                    </td>
                    <td>
                      <a href="">
                      <img src="" alt="twitter">
                      </a>
                    </td>
                    <td>
                      <a href="">
                      <img src="" alt="instagram">
                      </a>
                    </td>
                  </tr>
                </table>
              </tr>
              <tr>
                <td class="footer-text">
                  You've received this email because you created an account with
                  us and are signed up to receive email updates from Bootiq
                </td>
              </tr>
              <tr>
                <td class="footer-text" style="padding-top: 8px;">
                  Update your email preferences to choose what types of emails you
                  receive
                </td>
              </tr>
              <tr>
                <td style="text-align: center;">
                  <a class="unsubscribe-text">
                    Unsubscribe from all marketing emails
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table> -->
    </body>
  </html>`;
  }
  

  export function updatedDeliveryTemplate(full_name: string, delivery_status: string) {
    return `<!DOCTYPE html> <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Static Template</title>
  
      <style>
        /* * {
          border: 1px solid red;
        } */
        .body {
          font-family: sans-serif;
          max-width: 600px;
          min-width: 375px;
          padding: 30px 60px;
          margin: 0 auto;
        }
        .logo {
          margin-left: auto;
          margin-right: auto;
          display: inline-block;
          width: 150px;
        }
        .content {
          min-height: 200px;
          padding-top: 50px;
          padding-bottom: 50px;
          font-size: 12px;
          color: #374b58;
        }
  
        .follow-us {
          color: #374b58;
          font-size: 11px;
          font-weight: 700px;
        }
        .copyright-text {
          text-align: center;
          color: #006be5;
          font-weight: 600;
          font-size: 10px;
        }
        .footer-text {
          text-align: left;
          color: #374b58;
          font-size: 10px;
          font-weight: 400px;
        }
        .unsubscribe-text {
          display: inline-block;
          padding-top: 20px;
          padding-bottom: 20px;
          color: #006be5;
          font-size: 11px;
          text-decoration: underline;
          font-weight: 600;
        }
        .follow-table {
          margin: 0 auto;
          border-spacing: 10px;
        }
      </style>
    </head>
    <body>
      <table class="body">
        <tr class="" align="center">
          <td>
           <!-- <img src="" alt="logo"> -->
          </td>
        </tr>
        <tr>
          <td>
            <div class="content">
              <p>Dear ${full_name},</p>
               <br>
              <p>Your order delivery status has changed to ${delivery_status}, If you have any questions and need assistance, please don't hesitate to contact our support team at contact@bootiq.com.
                Thank you for choosing Bootiq!
                . 
               </p>
               <p> 
                   &mdash; Best regards!<br>  
                   The Bootiq Team
                </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
      <!--      <table class="footer">
              <tr>
                <td class="copyright-text">
                  Copyright (c) 2023 Bootiq.
                </td>
              </tr>
              <tr align="center">
              <table class="follow-table">
                  <tr>
                    <td>Follow us:</td>
                    <td>
                      <a href="">
                         <img src="" alt="facebook">
                      </a>
                    </td>
                    <td>
                      <a href="">
                      <img src="" alt="twitter">
                      </a>
                    </td>
                    <td>
                      <a href="">
                      <img src="" alt="instagram">
                      </a>
                    </td>
                  </tr>
                </table>
              </tr>
              <tr>
                <td class="footer-text">
                  You've received this email because you created an account with
                  us and are signed up to receive email updates from Bootiq
                </td>
              </tr>
              <tr>
                <td class="footer-text" style="padding-top: 8px;">
                  Update your email preferences to choose what types of emails you
                  receive
                </td>
              </tr>
              <tr>
                <td style="text-align: center;">
                  <a class="unsubscribe-text">
                    Unsubscribe from all marketing emails
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table> -->
    </body>
  </html>`;
  }
  

  export function updatedOrderTemplate(full_name: string, order_status: string) {
    return `<!DOCTYPE html> <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Static Template</title>
  
      <style>
        /* * {
          border: 1px solid red;
        } */
        .body {
          font-family: sans-serif;
          max-width: 600px;
          min-width: 375px;
          padding: 30px 60px;
          margin: 0 auto;
        }
        .logo {
          margin-left: auto;
          margin-right: auto;
          display: inline-block;
          width: 150px;
        }
        .content {
          min-height: 200px;
          padding-top: 50px;
          padding-bottom: 50px;
          font-size: 12px;
          color: #374b58;
        }
  
        .follow-us {
          color: #374b58;
          font-size: 11px;
          font-weight: 700px;
        }
        .copyright-text {
          text-align: center;
          color: #006be5;
          font-weight: 600;
          font-size: 10px;
        }
        .footer-text {
          text-align: left;
          color: #374b58;
          font-size: 10px;
          font-weight: 400px;
        }
        .unsubscribe-text {
          display: inline-block;
          padding-top: 20px;
          padding-bottom: 20px;
          color: #006be5;
          font-size: 11px;
          text-decoration: underline;
          font-weight: 600;
        }
        .follow-table {
          margin: 0 auto;
          border-spacing: 10px;
        }
      </style>
    </head>
    <body>
      <table class="body">
        <tr class="" align="center">
          <td>
           <!-- <img src="" alt="logo"> -->
          </td>
        </tr>
        <tr>
          <td>
            <div class="content">
              <p>Dear ${full_name},</p>
               <br>
              <p>Your order status has been changed to ${order_status}, If you have any questions and need assistance, please don't hesitate to contact our support team at contact@bootiq.com.
                Thank you for choosing Bootiq!
                . 
               </p>
               <p> 
                   &mdash; Best regards!<br>  
                   The Bootiq Team
                </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
      <!--      <table class="footer">
              <tr>
                <td class="copyright-text">
                  Copyright (c) 2023 Bootiq.
                </td>
              </tr>
              <tr align="center">
              <table class="follow-table">
                  <tr>
                    <td>Follow us:</td>
                    <td>
                      <a href="">
                         <img src="" alt="facebook">
                      </a>
                    </td>
                    <td>
                      <a href="">
                      <img src="" alt="twitter">
                      </a>
                    </td>
                    <td>
                      <a href="">
                      <img src="" alt="instagram">
                      </a>
                    </td>
                  </tr>
                </table>
              </tr>
              <tr>
                <td class="footer-text">
                  You've received this email because you created an account with
                  us and are signed up to receive email updates from Bootiq
                </td>
              </tr>
              <tr>
                <td class="footer-text" style="padding-top: 8px;">
                  Update your email preferences to choose what types of emails you
                  receive
                </td>
              </tr>
              <tr>
                <td style="text-align: center;">
                  <a class="unsubscribe-text">
                    Unsubscribe from all marketing emails
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table> -->
    </body>
  </html>`;
  }
  




  export function adminKycTemplate(full_name: string) {
    return `<!DOCTYPE html> <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Static Template</title>
  
      <style>
        /* * {
          border: 1px solid red;
        } */
        .body {
          font-family: sans-serif;
          max-width: 600px;
          min-width: 375px;
          padding: 30px 60px;
          margin: 0 auto;
        }
        .logo {
          margin-left: auto;
          margin-right: auto;
          display: inline-block;
          width: 150px;
        }
        .content {
          min-height: 200px;
          padding-top: 50px;
          padding-bottom: 50px;
          font-size: 12px;
          color: #374b58;
        }
  
        .follow-us {
          color: #374b58;
          font-size: 11px;
          font-weight: 700px;
        }
        .copyright-text {
          text-align: center;
          color: #006be5;
          font-weight: 600;
          font-size: 10px;
        }
        .footer-text {
          text-align: left;
          color: #374b58;
          font-size: 10px;
          font-weight: 400px;
        }
        .unsubscribe-text {
          display: inline-block;
          padding-top: 20px;
          padding-bottom: 20px;
          color: #006be5;
          font-size: 11px;
          text-decoration: underline;
          font-weight: 600;
        }
        .follow-table {
          margin: 0 auto;
          border-spacing: 10px;
        }
      </style>
    </head>
    <body>
      <table class="body">
        <tr class="" align="center">
          <td>
           <!-- <img src="" alt="logo"> -->
          </td>
        </tr>
        <tr>
          <td>
            <div class="content">
              <p>Dear Admin,</p>
               <br>
               <p>${full_name} has submitted his document for KYC verification, kindly attend to it .
               </p>
               <p> 
                   &mdash; Best regards!<br>  
                   The Bootiq Team
                </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
      <!--      <table class="footer">
              <tr>
                <td class="copyright-text">
                  Copyright (c) 2023 Bootiq.
                </td>
              </tr>
              <tr align="center">
              <table class="follow-table">
                  <tr>
                    <td>Follow us:</td>
                    <td>
                      <a href="">
                         <img src="" alt="facebook">
                      </a>
                    </td>
                    <td>
                      <a href="">
                      <img src="" alt="twitter">
                      </a>
                    </td>
                    <td>
                      <a href="">
                      <img src="" alt="instagram">
                      </a>
                    </td>
                  </tr>
                </table>
              </tr>
              <tr>
                <td class="footer-text">
                  You've received this email because you created an account with
                  us and are signed up to receive email updates from Bootiq
                </td>
              </tr>
              <tr>
                <td class="footer-text" style="padding-top: 8px;">
                  Update your email preferences to choose what types of emails you
                  receive
                </td>
              </tr>
              <tr>
                <td style="text-align: center;">
                  <a class="unsubscribe-text">
                    Unsubscribe from all marketing emails
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table> -->
    </body>
  </html>`;
  }
  

  export function KycStatusTemplate(full_name: string, kyc_status) {
    return `<!DOCTYPE html> <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Static Template</title>
  
      <style>
        /* * {
          border: 1px solid red;
        } */
        .body {
          font-family: sans-serif;
          max-width: 600px;
          min-width: 375px;
          padding: 30px 60px;
          margin: 0 auto;
        }
        .logo {
          margin-left: auto;
          margin-right: auto;
          display: inline-block;
          width: 150px;
        }
        .content {
          min-height: 200px;
          padding-top: 50px;
          padding-bottom: 50px;
          font-size: 12px;
          color: #374b58;
        }
  
        .follow-us {
          color: #374b58;
          font-size: 11px;
          font-weight: 700px;
        }
        .copyright-text {
          text-align: center;
          color: #006be5;
          font-weight: 600;
          font-size: 10px;
        }
        .footer-text {
          text-align: left;
          color: #374b58;
          font-size: 10px;
          font-weight: 400px;
        }
        .unsubscribe-text {
          display: inline-block;
          padding-top: 20px;
          padding-bottom: 20px;
          color: #006be5;
          font-size: 11px;
          text-decoration: underline;
          font-weight: 600;
        }
        .follow-table {
          margin: 0 auto;
          border-spacing: 10px;
        }
      </style>
    </head>
    <body>
      <table class="body">
        <tr class="" align="center">
          <td>
           <!-- <img src="" alt="logo"> -->
          </td>
        </tr>
        <tr>
          <td>
            <div class="content">
              <p>Dear ${full_name},</p>
               <br>
               <p> Dear customer, after checking the document you submitted for KYC verification, it's been ${kyc_status}.
               </p>
               <p> 
                   &mdash; Best regards!<br>  
                   The Bootiq Team
                </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
      <!--      <table class="footer">
              <tr>
                <td class="copyright-text">
                  Copyright (c) 2023 Bootiq.
                </td>
              </tr>
              <tr align="center">
              <table class="follow-table">
                  <tr>
                    <td>Follow us:</td>
                    <td>
                      <a href="">
                         <img src="" alt="facebook">
                      </a>
                    </td>
                    <td>
                      <a href="">
                      <img src="" alt="twitter">
                      </a>
                    </td>
                    <td>
                      <a href="">
                      <img src="" alt="instagram">
                      </a>
                    </td>
                  </tr>
                </table>
              </tr>
              <tr>
                <td class="footer-text">
                  You've received this email because you created an account with
                  us and are signed up to receive email updates from Bootiq
                </td>
              </tr>
              <tr>
                <td class="footer-text" style="padding-top: 8px;">
                  Update your email preferences to choose what types of emails you
                  receive
                </td>
              </tr>
              <tr>
                <td style="text-align: center;">
                  <a class="unsubscribe-text">
                    Unsubscribe from all marketing emails
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table> -->
    </body>
  </html>`;
  }


  export function vendorKycTemplate(full_name: string) {
    return `<!DOCTYPE html> <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Static Template</title>
  
      <style>
        /* * {
          border: 1px solid red;
        } */
        .body {
          font-family: sans-serif;
          max-width: 600px;
          min-width: 375px;
          padding: 30px 60px;
          margin: 0 auto;
        }
        .logo {
          margin-left: auto;
          margin-right: auto;
          display: inline-block;
          width: 150px;
        }
        .content {
          min-height: 200px;
          padding-top: 50px;
          padding-bottom: 50px;
          font-size: 12px;
          color: #374b58;
        }
  
        .follow-us {
          color: #374b58;
          font-size: 11px;
          font-weight: 700px;
        }
        .copyright-text {
          text-align: center;
          color: #006be5;
          font-weight: 600;
          font-size: 10px;
        }
        .footer-text {
          text-align: left;
          color: #374b58;
          font-size: 10px;
          font-weight: 400px;
        }
        .unsubscribe-text {
          display: inline-block;
          padding-top: 20px;
          padding-bottom: 20px;
          color: #006be5;
          font-size: 11px;
          text-decoration: underline;
          font-weight: 600;
        }
        .follow-table {
          margin: 0 auto;
          border-spacing: 10px;
        }
      </style>
    </head>
    <body>
      <table class="body">
        <tr class="" align="center">
          <td>
           <!-- <img src="" alt="logo"> -->
          </td>
        </tr>
        <tr>
          <td>
            <div class="content">
              <p>Dear ${full_name},</p>
               <br>
               <p> We have received your KYC and the BOOTIQ team is attending to it already, we will get back to you with the status soon.
               </p>
               <p> 
                   &mdash; Best regards!<br>  
                   The Bootiq Team
                </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
      <!--      <table class="footer">
              <tr>
                <td class="copyright-text">
                  Copyright (c) 2023 Bootiq.
                </td>
              </tr>
              <tr align="center">
              <table class="follow-table">
                  <tr>
                    <td>Follow us:</td>
                    <td>
                      <a href="">
                         <img src="" alt="facebook">
                      </a>
                    </td>
                    <td>
                      <a href="">
                      <img src="" alt="twitter">
                      </a>
                    </td>
                    <td>
                      <a href="">
                      <img src="" alt="instagram">
                      </a>
                    </td>
                  </tr>
                </table>
              </tr>
              <tr>
                <td class="footer-text">
                  You've received this email because you created an account with
                  us and are signed up to receive email updates from Bootiq
                </td>
              </tr>
              <tr>
                <td class="footer-text" style="padding-top: 8px;">
                  Update your email preferences to choose what types of emails you
                  receive
                </td>
              </tr>
              <tr>
                <td style="text-align: center;">
                  <a class="unsubscribe-text">
                    Unsubscribe from all marketing emails
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table> -->
    </body>
  </html>`;
  }
  
  
  /* eslint-disable prettier/prettier */
  export function OtpTemplate(full_name: string, code: string) {
    return `<!DOCTYPE html> <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Static Template</title>
  
      <style>
        /* * {
          border: 1px solid red;
        } */
        .body {
          font-family: sans-serif;
          max-width: 600px;
          min-width: 375px;
          padding: 30px 60px;
          margin: 0 auto;
        }
        .logo {
          margin-left: auto;
          margin-right: auto;
          display: inline-block;
          width: 150px;
        }
        .content {
          min-height: 200px;
          padding-top: 50px;
          padding-bottom: 50px;
          font-size: 12px;
          color: #374b58;
        }
  
        .follow-us {
          color: #374b58;
          font-size: 11px;
          font-weight: 700px;
        }
        .copyright-text {
          text-align: center;
          color: #006be5;
          font-weight: 600;
          font-size: 10px;
        }
        .footer-text {
          text-align: left;
          color: #374b58;
          font-size: 10px;
          font-weight: 400px;
        }
        .unsubscribe-text {
          display: inline-block;
          padding-top: 20px;
          padding-bottom: 20px;
          color: #006be5;
          font-size: 11px;
          text-decoration: underline;
          font-weight: 600;
        }
        .follow-table {
          margin: 0 auto;
          border-spacing: 10px;
        }
      </style>
    </head>
    <body>
      <table class="body">
        <tr class="" align="center">
          <td>
           <!-- <img src="" alt="logo"> -->
          </td>
        </tr>
        <tr>
          <td>
            <div class="content">
              <p>Welcome ${full_name},</p>
               <br>
               <p> Please use the following One-Time Pasword (OTP) for verification and please do not share with anyone ${code}
               </p>
               <p> 
                   &mdash; Cheers!<br>  
                   The Bootiq Team
                </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
      <!--      <table class="footer">
              <tr>
                <td class="copyright-text">
                  Copyright (c) 2023 Roppi.
                </td>
              </tr>
              <tr align="center">
              <table class="follow-table">
                  <tr>
                    <td>Follow us:</td>
                    <td>
                      <a href="">
                         <img src="" alt="facebook">
                      </a>
                    </td>
                    <td>
                      <a href="">
                      <img src="" alt="twitter">
                      </a>
                    </td>
                    <td>
                      <a href="">
                      <img src="" alt="instagram">
                      </a>
                    </td>
                  </tr>
                </table>
              </tr>
              <tr>
                <td class="footer-text">
                  You've received this email because you created an account with
                  us and are signed up to receive email updates from Bootiq
                </td>
              </tr>
              <tr>
                <td class="footer-text" style="padding-top: 8px;">
                  Update your email preferences to choose what types of emails you
                  receive
                </td>
              </tr>
              <tr>
                <td style="text-align: center;">
                  <a class="unsubscribe-text">
                    Unsubscribe from all marketing emails
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table> -->
    </body>
  </html>`;
  }

  export function OrderRecievedTemplate(full_name: string) {
    return `<!DOCTYPE html> <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Static Template</title>
  
      <style>
        /* * {
          border: 1px solid red;
        } */
        .body {
          font-family: sans-serif;
          max-width: 600px;
          min-width: 375px;
          padding: 30px 60px;
          margin: 0 auto;
        }
        .logo {
          margin-left: auto;
          margin-right: auto;
          display: inline-block;
          width: 150px;
        }
        .content {
          min-height: 200px;
          padding-top: 50px;
          padding-bottom: 50px;
          font-size: 12px;
          color: #374b58;
        }
  
        .follow-us {
          color: #374b58;
          font-size: 11px;
          font-weight: 700px;
        }
        .copyright-text {
          text-align: center;
          color: #006be5;
          font-weight: 600;
          font-size: 10px;
        }
        .footer-text {
          text-align: left;
          color: #374b58;
          font-size: 10px;
          font-weight: 400px;
        }
        .unsubscribe-text {
          display: inline-block;
          padding-top: 20px;
          padding-bottom: 20px;
          color: #006be5;
          font-size: 11px;
          text-decoration: underline;
          font-weight: 600;
        }
        .follow-table {
          margin: 0 auto;
          border-spacing: 10px;
        }
      </style>
    </head>
    <body>
      <table class="body">
        <tr class="" align="center">
          <td>
           <!-- <img src="" alt="logo"> -->
          </td>
        </tr>
        <tr>
          <td>
            <div class="content">
              <p>Dear ${full_name},</p>
               <br>
               <p> Your order has been recieved and should get to you soon, thank you for your patronage.
               </p>
               <p> 
                   &mdash; Best regards!<br>  
                   The Bootiq Team
                </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
      <!--      <table class="footer">
              <tr>
                <td class="copyright-text">
                  Copyright (c) 2023 Bootiq.
                </td>
              </tr>
              <tr align="center">
              <table class="follow-table">
                  <tr>
                    <td>Follow us:</td>
                    <td>
                      <a href="">
                         <img src="" alt="facebook">
                      </a>
                    </td>
                    <td>
                      <a href="">
                      <img src="" alt="twitter">
                      </a>
                    </td>
                    <td>
                      <a href="">
                      <img src="" alt="instagram">
                      </a>
                    </td>
                  </tr>
                </table>
              </tr>
              <tr>
                <td class="footer-text">
                  You've received this email because you created an account with
                  us and are signed up to receive email updates from Bootiq
                </td>
              </tr>
              <tr>
                <td class="footer-text" style="padding-top: 8px;">
                  Update your email preferences to choose what types of emails you
                  receive
                </td>
              </tr>
              <tr>
                <td style="text-align: center;">
                  <a class="unsubscribe-text">
                    Unsubscribe from all marketing emails
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table> -->
    </body>
  </html>`;
  }

  export function AdminOrderRecievedTemplate(full_name: string) {
    return `<!DOCTYPE html> <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Static Template</title>
  
      <style>
        /* * {
          border: 1px solid red;
        } */
        .body {
          font-family: sans-serif;
          max-width: 600px;
          min-width: 375px;
          padding: 30px 60px;
          margin: 0 auto;
        }
        .logo {
          margin-left: auto;
          margin-right: auto;
          display: inline-block;
          width: 150px;
        }
        .content {
          min-height: 200px;
          padding-top: 50px;
          padding-bottom: 50px;
          font-size: 12px;
          color: #374b58;
        }
  
        .follow-us {
          color: #374b58;
          font-size: 11px;
          font-weight: 700px;
        }
        .copyright-text {
          text-align: center;
          color: #006be5;
          font-weight: 600;
          font-size: 10px;
        }
        .footer-text {
          text-align: left;
          color: #374b58;
          font-size: 10px;
          font-weight: 400px;
        }
        .unsubscribe-text {
          display: inline-block;
          padding-top: 20px;
          padding-bottom: 20px;
          color: #006be5;
          font-size: 11px;
          text-decoration: underline;
          font-weight: 600;
        }
        .follow-table {
          margin: 0 auto;
          border-spacing: 10px;
        }
      </style>
    </head>
    <body>
      <table class="body">
        <tr class="" align="center">
          <td>
           <!-- <img src="" alt="logo"> -->
          </td>
        </tr>
        <tr>
          <td>
            <div class="content">
              <p>Dear ${full_name},</p>
               <br>
               <p> An order is waiting for you, please attend to it as soon as possible, thank you.
               </p>
               <p> 
                   &mdash; Best regards!<br>  
                   The Bootiq Team
                </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
      <!--      <table class="footer">
              <tr>
                <td class="copyright-text">
                  Copyright (c) 2023 Bootiq.
                </td>
              </tr>
              <tr align="center">
              <table class="follow-table">
                  <tr>
                    <td>Follow us:</td>
                    <td>
                      <a href="">
                         <img src="" alt="facebook">
                      </a>
                    </td>
                    <td>
                      <a href="">
                      <img src="" alt="twitter">
                      </a>
                    </td>
                    <td>
                      <a href="">
                      <img src="" alt="instagram">
                      </a>
                    </td>
                  </tr>
                </table>
              </tr>
              <tr>
                <td class="footer-text">
                  You've received this email because you created an account with
                  us and are signed up to receive email updates from Bootiq
                </td>
              </tr>
              <tr>
                <td class="footer-text" style="padding-top: 8px;">
                  Update your email preferences to choose what types of emails you
                  receive
                </td>
              </tr>
              <tr>
                <td style="text-align: center;">
                  <a class="unsubscribe-text">
                    Unsubscribe from all marketing emails
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table> -->
    </body>
  </html>`;
  }
  