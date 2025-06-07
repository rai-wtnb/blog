import { SocialLinks } from "./SocialLinks";
import { Locale } from "@/lib/i18n";

interface ProfileSectionProps {
  authorData: {
    name: string;
    image: string;
    social: {
      linkedin?: string;
      twitter?: string;
      instagram?: string;
      github?: string;
      email?: string;
    };
  };
  locale: Locale;
}

export function ProfileSection({ authorData, locale }: ProfileSectionProps) {
  return (
    <section className="mb-16">
      <div
        className="flex items-center gap-6 rounded-lg shadow p-6 max-w-2xl"
        style={{ background: "var(--background)" }}
      >
        <img
          src={authorData.image}
          alt={authorData.name}
          className="w-20 h-20 rounded-full object-cover border-2"
          style={{ borderColor: "var(--theme-accent)" }}
        />
        <div>
          <h3
            className="text-2xl font-bold mb-2"
            style={{ color: "var(--foreground)" }}
          >
            {authorData.name}
          </h3>

          <SocialLinks social={authorData.social} locale={locale} />
        </div>
      </div>
    </section>
  );
}
