import type { TeamSection } from "@/content/types";

export default function TeamHighlight({ teamSection }: { teamSection: TeamSection }) {
  return (
    <section>
      <div className="text-center">
        <h2 className="text-4xl font-extrabold leading-tight">
          {teamSection.headline}
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          {teamSection.subheading}
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {teamSection.roles.map((role: TeamSection["roles"][number], idx: number) => (
          <div key={idx} className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="text-xl font-semibold">{role.label}</h3>
            <p className="mt-2 text-gray-600">{role.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}