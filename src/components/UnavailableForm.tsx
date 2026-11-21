import { Info } from "lucide-react";

export type Field = { name: string; label: string; type?: "text" | "email" | "tel" | "textarea" | "select"; options?: string[]; required?: boolean };

/**
 * Formulaire présenté mais volontairement NON ENVOYABLE : aucun traitement n'existe encore
 * (base de données et e-mails = phases suivantes). Aucune soumission, aucun faux succès.
 */
export default function UnavailableForm({ fields, notice, submitLabel }: { fields: Field[]; notice: string; submitLabel: string }) {
  const base = "mt-2 w-full rounded-xl border border-white/10 bg-nw-black/60 px-4 py-3 text-white placeholder:text-nw-gray/40 disabled:cursor-not-allowed disabled:opacity-60";
  return (
    <div>
      <div role="note" className="mb-6 flex gap-3 rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 text-sm text-amber-100">
        <Info size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
        <p>{notice}</p>
      </div>
      <form noValidate>
        <fieldset disabled className="grid gap-5 sm:grid-cols-2">
          <legend className="sr-only">Formulaire non disponible pour le moment</legend>
          {fields.map((f) => (
            <div key={f.name} className={f.type === "textarea" ? "sm:col-span-2" : ""}>
              <label htmlFor={f.name} className="text-sm font-medium text-white">{f.label}{f.required && <span aria-hidden="true"> *</span>}</label>
              {f.type === "textarea" ? <textarea id={f.name} rows={5} className={base} />
                : f.type === "select" ? <select id={f.name} className={base}><option>—</option>{f.options?.map((o) => <option key={o}>{o}</option>)}</select>
                : <input id={f.name} type={f.type ?? "text"} className={base} />}
            </div>
          ))}
          <div className="sm:col-span-2">
            <button type="submit" disabled className="min-h-12 cursor-not-allowed rounded-full bg-nw-blue/40 px-8 font-semibold text-white/70">{submitLabel} (indisponible)</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
