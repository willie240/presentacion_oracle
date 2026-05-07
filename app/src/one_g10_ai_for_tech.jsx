import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function IconBase({ children, className = "h-5 w-5" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            {children}
        </svg>
    );
}

const Icons = {
    cloud: (props) => (
        <IconBase {...props}>
            <path d="M17.5 19H8a5 5 0 1 1 1.2-9.86A6 6 0 0 1 20 12.5 3.5 3.5 0 0 1 17.5 19Z" />
        </IconBase>
    ),
    database: (props) => (
        <IconBase {...props}>
            <ellipse cx="12" cy="5" rx="7" ry="3" />
            <path d="M5 5v6c0 1.66 3.13 3 7 3s7-1.34 7-3V5" />
            <path d="M5 11v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
        </IconBase>
    ),
    bot: (props) => (
        <IconBase {...props}>
            <rect x="5" y="8" width="14" height="10" rx="2" />
            <path d="M12 8V4" />
            <circle cx="9" cy="13" r="1" />
            <circle cx="15" cy="13" r="1" />
            <path d="M9 18v2" />
            <path d="M15 18v2" />
        </IconBase>
    ),
    sparkles: (props) => (
        <IconBase {...props}>
            <path d="M12 3l1.4 4.2L18 9l-4.6 1.8L12 15l-1.4-4.2L6 9l4.6-1.8L12 3Z" />
            <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" />
            <path d="M5 14l.7 1.8L8 16.5l-2.3.7L5 19l-.7-1.8L2 16.5l2.3-.7L5 14Z" />
        </IconBase>
    ),
    workflow: (props) => (
        <IconBase {...props}>
            <rect x="3" y="4" width="6" height="6" rx="1" />
            <rect x="15" y="4" width="6" height="6" rx="1" />
            <rect x="9" y="15" width="6" height="6" rx="1" />
            <path d="M9 7h6" />
            <path d="M18 10v2a3 3 0 0 1-3 3h-3" />
            <path d="M6 10v2a3 3 0 0 0 3 3h3" />
        </IconBase>
    ),
    graduation: (props) => (
        <IconBase {...props}>
            <path d="M22 10 12 5 2 10l10 5 10-5Z" />
            <path d="M6 12v5c3 2 9 2 12 0v-5" />
        </IconBase>
    ),
    clock: (props) => (
        <IconBase {...props}>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
        </IconBase>
    ),
    users: (props) => (
        <IconBase {...props}>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </IconBase>
    ),
    check: (props) => (
        <IconBase {...props}>
            <circle cx="12" cy="12" r="9" />
            <path d="m8 12 2.5 2.5L16 9" />
        </IconBase>
    ),
    arrowRight: (props) => (
        <IconBase {...props}>
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
        </IconBase>
    ),
    briefcase: (props) => (
        <IconBase {...props}>
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <path d="M3 13h18" />
        </IconBase>
    ),
    search: (props) => (
        <IconBase {...props}>
            <circle cx="11" cy="11" r="7" />
            <path d="m16 16 5 5" />
        </IconBase>
    ),
    layers: (props) => (
        <IconBase {...props}>
            <path d="m12 3 9 5-9 5-9-5 9-5Z" />
            <path d="m3 12 9 5 9-5" />
            <path d="m3 16 9 5 9-5" />
        </IconBase>
    ),
    shield: (props) => (
        <IconBase {...props}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
            <path d="m9 12 2 2 4-4" />
        </IconBase>
    ),
    compass: (props) => (
        <IconBase {...props}>
            <circle cx="12" cy="12" r="9" />
            <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
        </IconBase>
    ),
};

const formations = [
    {
        id: "genai",
        title: "Desenvolvimento e Orquestração com IA Generativa",
        shortTitle: "IA Generativa aplicada",
        icon: Icons.sparkles,
        color: "from-[#C74634] to-[#7F2A21]",
        accent: "bg-[#C74634]",
        question: "Como usar IA para criar, revisar e acelerar entregas digitais?",
        executiveSummary:
            "Uma formação para desenvolver fluência prática em IA generativa, com foco em produtividade, prototipação e uso orientado de ferramentas como ChatGPT, Gemini, Claude e Grok.",
        outcome:
            "Ao final, a pessoa participante compreende como estruturar prompts, avaliar respostas, usar IA no ciclo de desenvolvimento e acelerar protótipos com mais qualidade.",
        hours: 21,
        courses: 3,
        businessValue: [
            "Acelera tarefas de criação, revisão e prototipação com apoio de IA.",
            "Desenvolve repertório para uso responsável e estratégico de assistentes inteligentes.",
            "Apoia profissionais júnior na adoção de ferramentas modernas de desenvolvimento com IA.",
        ],
        coursesList: [
            {
                name: "IA para Desenvolvedores",
                hours: 5,
                human: "Uso de IA para apoiar escrita, revisão, validação e melhoria de códigos e protótipos.",
            },
            {
                name: "Python e Gemini: orquestrando LLMs com LangChain",
                hours: 8,
                human: "Conexão entre modelos de linguagem para compor soluções inteligentes e integradas.",
            },
            {
                name: "Inteligência Artificial: preparação para o mercado",
                hours: 8,
                human: "Construção de portfólio, leitura de tendências e preparação para oportunidades em tecnologia.",
            },
        ],
    },
    {
        id: "agents",
        title: "Engenharia de Agentes e Automação com IA",
        shortTitle: "Agentes e automações",
        icon: Icons.bot,
        color: "from-[#312D2A] to-[#6B625C]",
        accent: "bg-[#312D2A]",
        question: "Como automatizar processos e criar fluxos inteligentes com IA?",
        executiveSummary:
            "Uma formação voltada à compreensão de agentes de IA e automações, conectando conceitos de orquestração, tomada de decisão e integração com ferramentas de trabalho.",
        outcome:
            "Ao final, a pessoa participante entende como criar automações, integrar serviços, orquestrar agentes e estruturar fluxos úteis para contextos técnicos e operacionais.",
        hours: 26,
        courses: 5,
        businessValue: [
            "Traduz automação em soluções implementáveis para rotinas técnicas e operacionais.",
            "Mostra como IA pode apoiar fluxos com APIs, sistemas, dados, notificações e integrações.",
            "Desenvolve visão sobre processos inteligentes, agentes e orquestração de tarefas.",
        ],
        coursesList: [
            {
                name: "Agentes de IA com LangGraph",
                hours: 2,
                human: "Introdução a agentes capazes de raciocinar, escolher ferramentas e executar tarefas.",
            },
            {
                name: "LangGraph: orquestração de agentes e multiagentes",
                hours: 10,
                human: "Organização de fluxos com etapas, decisões e colaboração entre múltiplos agentes.",
            },
            {
                name: "n8n: crie automatizações inteligentes",
                hours: 4,
                human: "Criação de automações visuais com integração entre IA, planilhas e serviços digitais.",
            },
            {
                name: "Automação de fluxos: integrando n8n e IA",
                hours: 8,
                human: "Automação de rotinas como classificação de mensagens, análise de feedbacks e envio de relatórios.",
            },
            {
                name: "n8n para devs: workflows inteligentes",
                hours: 2,
                human: "Estruturação de fluxos avançados com validações, notificações e monitoramento.",
            },
        ],
    },
    {
        id: "rag",
        title: "Inteligência de Dados e RAG Avançado",
        shortTitle: "Dados e respostas inteligentes",
        icon: Icons.database,
        color: "from-[#1F6F68] to-[#0F3F3A]",
        accent: "bg-[#1F6F68]",
        question: "Como transformar documentos e dados em respostas confiáveis?",
        executiveSummary:
            "Uma formação para compreender como a IA pode consultar documentos, bases internas e arquivos estruturados, gerando respostas mais contextualizadas e úteis para tomada de decisão.",
        outcome:
            "Ao final, a pessoa participante entende como funcionam soluções baseadas em RAG, agentes de análise de dados e assistentes que consultam fontes confiáveis.",
        hours: 24,
        courses: 3,
        businessValue: [
            "Reduz o tempo de busca e interpretação de informações em documentos e bases internas.",
            "Apoia decisões mais orientadas por dados, com respostas contextualizadas.",
            "Conecta IA, dados e conhecimento corporativo em aplicações práticas.",
        ],
        coursesList: [
            {
                name: "RAG e agentes de IA",
                hours: 2,
                human: "Uso de IA conectada a documentos para respostas mais atualizadas e contextualizadas.",
            },
            {
                name: "LangChain: técnicas avançadas de RAG",
                hours: 10,
                human: "Estratégias para melhorar busca, organização, recuperação e qualidade das respostas.",
            },
            {
                name: "LangChain: automatizando análise de dados com agentes",
                hours: 12,
                human: "Criação de assistentes para ler arquivos, gerar análises, relatórios e visualizações.",
            },
        ],
    },
    {
        id: "oci",
        title: "Oracle Cloud Infrastructure",
        shortTitle: "Oracle Cloud Infrastructure",
        icon: Icons.cloud,
        color: "from-[#E26D5A] to-[#C74634]",
        accent: "bg-[#C74634]",
        question: "Como compreender a base em nuvem que sustenta produtos digitais?",
        executiveSummary:
            "Uma formação para apresentar os fundamentos da Oracle Cloud Infrastructure, conectando nuvem, aplicações, bancos de dados, segurança e disponibilidade a cenários reais de negócio.",
        outcome:
            "Ao final, a pessoa participante compreende os conceitos essenciais de infraestrutura em nuvem e como a OCI apoia deploy, bancos de dados, redes, segurança e disponibilidade de aplicações modernas.",
        hours: 18,
        courses: 2,
        businessValue: [
            "Fortalece a compreensão sobre nuvem, infraestrutura e serviços digitais.",
            "Conecta a tecnologia Oracle a aplicações, bancos de dados e disponibilidade.",
            "Apoia conversas estratégicas entre áreas de negócio, tecnologia e operação.",
        ],
        coursesList: [
            {
                name: "OCI: implementação de uma aplicação na nuvem",
                hours: 8,
                human: "Configuração de servidores, redes, segurança, balanceamento e alta disponibilidade.",
            },
            {
                name: "OCI: banco de dados e infraestrutura como código",
                hours: 10,
                human: "Hospedagem de aplicações, criação de sites estáticos e organização de recursos de nuvem.",
            },
        ],
    },
];

function validateFormations(data) {
    return data.every((formation) => {
        const courseHours = formation.coursesList.reduce((sum, course) => sum + course.hours, 0);
        return (
            formation.id &&
            formation.title &&
            formation.shortTitle &&
            formation.question &&
            typeof formation.icon === "function" &&
            formation.courses === formation.coursesList.length &&
            formation.hours === courseHours &&
            formation.businessValue.length >= 3
        );
    });
}

console.assert(validateFormations(formations), "Teste: formações devem ter dados, cursos, horas e ícones válidos.");
console.assert(formations.length === 4, "Teste: a apresentação deve exibir 4 formações.");
console.assert(formations.reduce((sum, item) => sum + item.courses, 0) === 13, "Teste: a matriz deve totalizar 13 cursos.");
console.assert(formations.reduce((sum, item) => sum + item.hours, 0) === 89, "Teste: a carga total deve ser de 89 horas.");

const totalHours = formations.reduce((sum, item) => sum + item.hours, 0);
const totalCourses = formations.reduce((sum, item) => sum + item.courses, 0);

function SectionHeader({ eyebrow, title, description, align = "left" }) {
    return (
        <div className={align === "center" ? "mx-auto mb-10 max-w-3xl text-center" : "mb-10 max-w-3xl"}>
            <Badge variant="outline" className="mb-4 rounded-full border-[#C74634]/30 bg-[#C74634]/5 px-4 py-1 text-[#7F2A21]">
                {eyebrow}
            </Badge>
            <h2 className="text-3xl font-black tracking-tight text-[#312D2A] md:text-5xl">{title}</h2>
            {description && <p className="mt-5 text-base leading-relaxed text-stone-600 md:text-lg">{description}</p>}
        </div>
    );
}

function StatCard({ icon: Icon, label, value, detail }) {
    return (
        <Card className="rounded-3xl border-white/15 bg-white/10 text-white shadow-2xl backdrop-blur">
            <CardContent className="p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                    <Icon className="h-6 w-6" />
                </div>
                <div className="text-4xl font-black tracking-tight">{value}</div>
                <div className="mt-2 text-sm font-semibold text-white/90">{label}</div>
                <div className="mt-3 text-sm leading-relaxed text-white/65">{detail}</div>
            </CardContent>
        </Card>
    );
}

function FormationCard({ formation, selected, onClick }) {
    const Icon = formation.icon;

    return (
        <button type="button" onClick={onClick} className="h-full text-left">
            <Card
                className={`h-full rounded-3xl border transition-all duration-300 ${selected
                        ? "scale-[1.02] border-[#C74634] bg-white shadow-2xl shadow-[#C74634]/10"
                        : "border-stone-200 bg-white/80 shadow-sm hover:border-[#C74634]/40 hover:shadow-xl"
                    }`}
            >
                <CardContent className="p-6">
                    <div className="mb-5 flex items-start justify-between gap-4">
                        <div className={`flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br ${formation.color} p-3 text-white shadow-lg`}>
                            <Icon className="h-6 w-6" />
                        </div>
                        <Badge variant="secondary" className="rounded-full bg-stone-100 text-stone-700">
                            {formation.hours}h
                        </Badge>
                    </div>
                    <h3 className="text-xl font-black leading-tight text-[#312D2A]">{formation.shortTitle}</h3>
                    <p className="mt-4 text-sm font-medium leading-relaxed text-stone-600">{formation.question}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#C74634]">
                        Ver formação <Icons.arrowRight className="h-4 w-4" />
                    </div>
                </CardContent>
            </Card>
        </button>
    );
}

function PillarCard({ icon: Icon, title, text }) {
    return (
        <Card className="rounded-3xl border-stone-200 bg-white shadow-sm">
            <CardContent className="p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C74634]/10 text-[#C74634]">
                    <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-black text-[#312D2A]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{text}</p>
            </CardContent>
        </Card>
    );
}

function CourseRow({ course, index }) {
    return (
        <div className="group rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-[#C74634]/40 hover:shadow-md">
            <div className="mb-3 flex flex-wrap items-center gap-2">
                <Badge className="rounded-full bg-[#312D2A] text-white">Curso {index + 1}</Badge>
                <Badge variant="secondary" className="rounded-full bg-stone-100 text-stone-700">{course.hours}h</Badge>
            </div>
            <h4 className="font-black leading-snug text-[#312D2A]">{course.name}</h4>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">{course.human}</p>
        </div>
    );
}

function MethodStep({ number, title, text, icon: Icon }) {
    return (
        <div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-white backdrop-blur">
            <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-black text-[#312D2A]">{number}</div>
                <Icon className="h-6 w-6 text-white/80" />
            </div>
            <h3 className="text-lg font-black">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{text}</p>
        </div>
    );
}

export default function OracleFormationsSite() {
    const [selectedId, setSelectedId] = useState("genai");
    const selected = useMemo(() => formations.find((item) => item.id === selectedId) || formations[0], [selectedId]);
    const SelectedIcon = selected.icon;

    return (
        <main className="min-h-screen bg-[#F8F6F3] text-[#312D2A]">
            <section className="relative overflow-hidden bg-[#312D2A] px-6 py-8 text-white md:px-10 lg:px-16">
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute left-24 top-0 h-[600px] w-[600px] rounded-full bg-[#C74634] blur-3xl" />
                    <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#7BAFC4] blur-3xl" />
                    <div className="absolute bottom-0 left-1/2 h-80 w-80 rounded-full bg-[#8FAF7E] blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-7xl">
                    <header className="mb-14 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
                        <div className="flex items-center gap-3">
                            <img src="/logo.png" alt="Alura logo" className="h-10 w-auto" />
                            <img src="/alura.png" alt="Alura Latam" className="w-auto" style={{mixBlendMode: "lighten", height: "45px"}} />
                        </div>
                        <Badge className="rounded-full bg-white px-4 py-1.5 font-semibold text-[#312D2A] hover:bg-white">IA • Dados • Automação • OCI</Badge>
                    </header>

                    <div className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
                        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                            <Badge className="mb-6 rounded-full bg-[#C74634] px-4 py-1.5 text-white hover:bg-[#C74634]">Apresentação executiva</Badge>
                            <h1 className="max-w-5xl text-4xl font-black tracking-tight md:text-6xl lg:text-7xl">
                                Formações para acelerar talentos técnicos em início de carreira
                            </h1>
                            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">
                                Uma jornada de aprendizagem desenhada para talentos entry-level, trainees, estagiários e profissionais júnior em tecnologia, com foco em inteligência artificial, automação, dados, desenvolvimento e Oracle Cloud Infrastructure.
                            </p>
                            <div className="mt-9 flex flex-wrap gap-3">
                                <Button className="rounded-full bg-white px-7 py-6 text-[#312D2A] hover:bg-white/90" onClick={() => document.getElementById('formacoes').scrollIntoView({ behavior: 'smooth' })}>
                                    Explorar formações <Icons.arrowRight className="ml-2 h-4 w-4" />
                                </Button>
                                <Button variant="outline" className="rounded-full border-white/30 bg-transparent px-7 py-6 text-white hover:bg-white/10 hover:text-white" onClick={() => document.getElementById('sintese').scrollIntoView({ behavior: 'smooth' })}>
                                    Ver impacto esperado
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="grid gap-4 sm:grid-cols-2">
                            <StatCard icon={Icons.layers} value="4" label="formações" detail="Organizadas por objetivos de negócio e aprendizagem" />
                            <StatCard icon={Icons.graduation} value={totalCourses} label="cursos" detail="Conteúdos conectados em uma jornada progressiva" />
                            <StatCard icon={Icons.clock} value={`${totalHours}h`} label="carga total" detail="Distribuída em módulos objetivos e aplicados" />
                            <StatCard icon={Icons.users} value="Entry-level" label="perfil priorizado" detail="Trainees, estagiários e profissionais júnior em tecnologia" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
                <SectionHeader
                    eyebrow="Intenção da jornada"
                    title="Aprofundamento técnico com leitura executiva clara"
                    description="As formações foram organizadas para desenvolver competências aplicadas em IA, automação, dados e nuvem para pessoas técnicas em início de carreira, mantendo uma linguagem clara para que a apresentação seja compreendida por stakeholders executivos da Oracle."
                    align="center"
                />
                <div className="grid gap-5 md:grid-cols-3">
                    <PillarCard icon={Icons.compass} title="Consolidar base técnica" text="Reforçar fundamentos de IA, dados, automação e nuvem com foco em aplicação prática para perfis júnior." />
                    <PillarCard icon={Icons.workflow} title="Construir soluções" text="Conectar os cursos a entregas concretas, como agentes, pipelines de RAG, automações, aplicações em nuvem e análise de dados." />
                    <PillarCard icon={Icons.shield} title="Ganhar autonomia" text="Desenvolver repertório para atuar em times técnicos, colaborar em projetos reais e evoluir com mais segurança na carreira." />
                </div>
            </section>

            <section id="formacoes" className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-16">
                <SectionHeader
                    eyebrow="Portfólio de formações"
                    title="Quatro caminhos complementares para acelerar a prática técnica"
                    description="Cada formação responde a uma necessidade prática de desenvolvimento técnico, com foco em back-end, ciência de dados, IA aplicada e infraestrutura em nuvem."
                />

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {formations.map((formation) => (
                        <FormationCard key={formation.id} formation={formation} selected={formation.id === selectedId} onClick={() => setSelectedId(formation.id)} />
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-16">
                <motion.div key={selected.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
                    <Card className="overflow-hidden rounded-[2rem] border-stone-200 bg-white shadow-2xl shadow-stone-300/40">
                        <CardContent className="p-0">
                            <div className={`bg-gradient-to-br ${selected.color} p-8 text-white md:p-12`}>
                                <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
                                    <div>
                                        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20 backdrop-blur">
                                            <SelectedIcon className="h-8 w-8" />
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge className="rounded-full bg-white/20 text-white hover:bg-white/20">{selected.hours} horas</Badge>
                                            <Badge className="rounded-full bg-white/20 text-white hover:bg-white/20">{selected.courses} cursos</Badge>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-white/60">Formação selecionada</p>
                                        <h2 className="max-w-4xl text-3xl font-black tracking-tight md:text-5xl">{selected.title}</h2>
                                        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-white/85">{selected.executiveSummary}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                                <div className="border-b border-stone-200 bg-white p-8 md:p-10 lg:border-b-0 lg:border-r">
                                    <h3 className="flex items-center gap-2 text-2xl font-black text-[#312D2A]">
                                        <Icons.briefcase className="h-6 w-6 text-[#C74634]" /> Valor para Oracle
                                    </h3>
                                    <p className="mt-4 text-base leading-relaxed text-stone-600">{selected.outcome}</p>
                                    <div className="mt-7 space-y-4">
                                        {selected.businessValue.map((item) => (
                                            <div key={item} className="flex gap-3 rounded-2xl bg-stone-50 p-4">
                                                <Icons.check className="mt-0.5 h-5 w-5 shrink-0 text-[#C74634]" />
                                                <p className="text-sm font-medium leading-relaxed text-stone-700">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-[#F8F6F3] p-8 md:p-10">
                                    <h3 className="flex items-center gap-2 text-2xl font-black text-[#312D2A]">
                                        <Icons.search className="h-6 w-6 text-[#C74634]" /> Conteúdos da formação
                                    </h3>
                                    <p className="mt-4 text-base leading-relaxed text-stone-600">
                                        Abaixo, os cursos que compõem esta formação, apresentados com foco no que a pessoa participante será capaz de compreender e aplicar.
                                    </p>
                                    <div className="mt-7 space-y-4">
                                        {selected.coursesList.map((course, index) => (
                                            <CourseRow key={course.name} course={course} index={index} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </section>

            <section className="relative overflow-hidden bg-[#312D2A] px-6 py-16 text-white md:px-10 lg:px-16">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-[#C74634] blur-3xl" />
                    <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-[#7BAFC4] blur-3xl" />
                    <div className="absolute top-0 left-1/2 h-80 w-80 rounded-full bg-[#8FAF7E] blur-3xl" />
                </div>
                <div className="relative mx-auto max-w-7xl">
                    <div className="mb-10 max-w-3xl">
                        <Badge className="mb-4 rounded-full bg-white text-[#312D2A] hover:bg-white">Experiência de aprendizagem</Badge>
                        <h2 className="text-3xl font-black tracking-tight md:text-5xl">Uma narrativa técnica, clara para leitura executiva</h2>
                        <p className="mt-5 text-lg leading-relaxed text-white/70">
                            A abordagem preserva a profundidade técnica necessária para alunos de tecnologia, mas organiza a apresentação de forma clara para que stakeholders não técnicos compreendam valor, progressão e impacto.
                        </p>
                    </div>
                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        <MethodStep number="1" icon={Icons.users} title="Perfil técnico júnior" text="Considera trainees, estagiários e profissionais entry-level que já atuam ou desejam atuar em tecnologia." />
                        <MethodStep number="2" icon={Icons.briefcase} title="Aplicações reais" text="Conecta os cursos a demandas de back-end, dados, automação, IA generativa, RAG e cloud." />
                        <MethodStep number="3" icon={Icons.workflow} title="Prática progressiva" text="Organiza a aprendizagem em uma sequência de construção: entender, implementar, integrar e evoluir." />
                        <MethodStep number="4" icon={Icons.check} title="Evolução profissional" text="Reforça autonomia técnica, repertório de ferramentas modernas e preparação para contribuir em projetos reais." />
                    </div>
                </div>
            </section>

            <section id="sintese" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                    <div>
                        <Badge variant="outline" className="mb-4 rounded-full border-[#C74634]/30 bg-[#C74634]/5 px-4 py-1 text-[#7F2A21]">Síntese executiva</Badge>
                        <h2 className="text-3xl font-black tracking-tight text-[#312D2A] md:text-5xl">O resultado é aceleração técnica aplicada a projetos reais</h2>
                        <p className="mt-5 text-lg leading-relaxed text-stone-600">
                            As formações fortalecem a capacidade de implementar soluções modernas, integrar ferramentas de IA, trabalhar com dados e compreender a infraestrutura que sustenta aplicações em produção.
                        </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-3xl bg-white p-6 shadow-sm">
                            <div className="mb-4 text-4xl font-black text-[#C74634]">IA</div>
                            <h3 className="font-black text-[#312D2A]">Criar e acelerar</h3>
                            <p className="mt-2 text-sm leading-relaxed text-stone-600">Assistentes, prompts, protótipos, código e integração com LLMs.</p>
                        </div>
                        <div className="rounded-3xl bg-white p-6 shadow-sm">
                            <div className="mb-4 text-4xl font-black text-[#1F6F68]">Dados</div>
                            <h3 className="font-black text-[#312D2A]">Consultar e decidir</h3>
                            <p className="mt-2 text-sm leading-relaxed text-stone-600">RAG, agentes, CSVs, pipelines, análises e respostas contextualizadas.</p>
                        </div>
                        <div className="rounded-3xl bg-white p-6 shadow-sm">
                            <div className="mb-4 text-4xl font-black text-[#312D2A]">OCI</div>
                            <h3 className="font-black text-[#312D2A]">Sustentar e escalar</h3>
                            <p className="mt-2 text-sm leading-relaxed text-stone-600">Deploy, aplicações, redes, bancos de dados, segurança e disponibilidade.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
