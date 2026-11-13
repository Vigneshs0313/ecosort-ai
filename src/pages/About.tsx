import { Link } from 'react-router-dom'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="card p-6"><h2 className="text-xl font-bold">{title}</h2><div className="mt-3 space-y-3 text-slate-700">{children}</div></section>
)

export default function About() {
  return (
    <div className="container-x max-w-4xl py-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark">About EcoSort AI</h1>
      <p className="mt-2 text-slate-600">An environmental technology project for IGEN GREEN DAY 2026, Section C: Nine Green Action Projects, on sustainable waste management and reduction.</p>
      <div className="mt-8 grid gap-5">
        <Section title="Objective">
          <p>Help people identify waste with AI and dispose of it correctly: reduce improper disposal, encourage segregation at source, raise recycling awareness and promote responsible consumption.</p>
        </Section>
        <Section title="How the AI works, and its limits">
          <p>Scanning uses TensorFlow.js in your browser with MobileNetV2, a general-purpose image classifier trained on the ImageNet dataset. It recognises 1,000 everyday objects such as bottles, fruit and phones. It was <b>not trained on waste</b>.</p>
          <p>EcoSort maps the model's top-5 labels to waste categories with a published keyword table (<code>src/data/mapping.ts</code>). So a result is a <b>heuristic suggestion</b>. The scanner always shows the original model output, the mapping reason and the confidence, and warns when confidence is low.</p>
          <p>Items with no ImageNet class (batteries, most wrappers, crushed or dirty items) may not be recognised. Then you choose the category yourself. You can also load your own TensorFlow.js waste model from the scanner page.</p>
        </Section>
        <Section title="Corrections and feedback">
          <p>When you correct a result, EcoSort stores the original AI prediction and your corrected category separately, with a timestamp and optional note. You can export these as a CSV dataset to study the model's errors or to help train a better one. The app does not retrain itself.</p>
        </Section>
        <Section title="Privacy">
          <p>Images are analysed on your device and never uploaded. Only a small thumbnail and the result are saved in your browser's local storage. The model files download once from a public host, then your browser caches them. Clearing history removes saved scans.</p>
        </Section>
        <Section title="Technology">
          <p>React, Vite, TypeScript, Tailwind CSS, TensorFlow.js, Recharts and Lucide icons. No backend, no API keys and no paid services.</p>
        </Section>
        <Section title="Sustainable Development Goals">
          <p>SDG 11 Sustainable Cities and Communities, SDG 12 Responsible Consumption and Production, SDG 13 Climate Action.</p>
        </Section>
        <Section title="Disclaimer"><p>Disposal advice is general guidance. Local rules vary, so follow your municipality or collector where they differ.</p></Section>
      </div>
      <Link to="/scanner" className="btn-primary mt-8">Try the scanner</Link>
    </div>
  )
}
