import { contactChannels, officeHours } from "@/lib/contact";

export function ContactChannels() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-red-600" />
          <div>
            <p className="font-semibold text-white">{officeHours.status}</p>
            <p className="text-sm text-zinc-400">{officeHours.weekdays}</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {contactChannels.map((channel) => (
          <a
            key={channel.label}
            href={channel.href}
            className="group flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition duration-300 hover:border-red-600 hover:bg-zinc-900"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-600/15 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
              <i
                className={`fa-solid ${channel.icon}`}
                aria-hidden="true"
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                {channel.label}
              </p>

              <p className="mt-1 font-semibold text-white">
                {channel.value}
              </p>

              <p className="mt-1 text-sm text-zinc-400">
                {channel.description}
              </p>
            </div>

            <i
              className="fa-solid fa-arrow-up-right-from-square ml-auto mt-1 text-xs text-zinc-600 transition group-hover:text-red-500"
              aria-hidden="true"
            />
          </a>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />

        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Central de Atendimento
          </p>

          <p className="mt-2 font-semibold text-white">
            MovieLab Streaming
          </p>

          <p className="mt-1 text-sm text-zinc-400">
            Atendimento online para assinantes de todo o Brasil.
          </p>

          <p className="mt-4 inline-flex items-center gap-2 text-xs text-zinc-500">
            <i className="fa-solid fa-clock" aria-hidden="true" />
            {officeHours.timezone}
          </p>
        </div>
      </div>
    </div>
  );
}