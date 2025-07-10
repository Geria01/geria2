"use client";
import Footer from "./_components/Footer";
import GeriaNavbar from "./_components/GeriaNavbar";
import { AuthProvider } from "./_context/AuthContext";
import "./globals.css";
import { useEffect } from "react";
import 'vanilla-cookieconsent/dist/cookieconsent.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const initCookieConsent = async () => {
      const { run } = await import('vanilla-cookieconsent');

      run({
        guiOptions: {
          consentModal: {
            layout: "box inline",
            position: "bottom right",
            equalWeightButtons: true,
            flipButtons: false
          },
          preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
          }
        },
        categories: {
          necessary: {
            readOnly: true
          },
          analytics: {},
          marketing: {}
        },
        language: {
          default: "en",
          autoDetect: "browser",
          translations: {
            en: {
              consentModal: {
                title: "We use cookies!",
                description: "Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent.",
                acceptAllBtn: "Accept all",
                acceptNecessaryBtn: "Reject all",
                showPreferencesBtn: "Manage preferences",
                footer: "<a href=\"/privacy-policy\">Privacy Policy</a>\n<a href=\"/cookies-policy\">Cookie Policy</a>"
              },
              preferencesModal: {
                title: "Consent Preferences Center",
                acceptAllBtn: "Accept all",
                acceptNecessaryBtn: "Reject all",
                savePreferencesBtn: "Save preferences",
                closeIconLabel: "Close modal",
                serviceCounterLabel: "Service|Services",
                sections: [
                  {
                    title: "Cookie Usage",
                    description: "We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking \"Accept All\", you consent to our use of cookies."
                  },
                  {
                    title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                    description: "These cookies are essential for the website to function and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services.",
                    linkedCategory: "necessary"
                  },
                  {
                    title: "Analytics Cookies",
                    description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.",
                    linkedCategory: "analytics"
                  },
                  {
                    title: "Marketing Cookies",
                    description: "These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.",
                    linkedCategory: "marketing"
                  }
                ]
              }
            }
          }
        }
      });
    };

    initCookieConsent();
  }, []);

  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div id="_root" className="flex flex-col h-full">
            <GeriaNavbar />
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}