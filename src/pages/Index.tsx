import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Главная', href: '#home' },
    { name: 'Контент', href: '#content' },
    { name: 'Интервью', href: '#interview' },
    { name: 'Проекты', href: '#projects' },
    { name: 'О журнале', href: '#about' },
    { name: 'Контакты', href: '#contact' },
  ];

  const projects = [
    {
      title: 'Floating Office',
      location: 'Rotterdam, The Netherlands',
      image: 'https://cdn.poehali.dev/files/615cc142-9000-46c4-aae9-7ddc969999ba.png',
      description: 'Инновационный плавучий офис, сочетающий устойчивое развитие и современный дизайн.',
    },
    {
      title: 'Floating Farm',
      location: 'Rotterdam, The Netherlands',
      image: 'https://cdn.poehali.dev/files/615cc142-9000-46c4-aae9-7ddc969999ba.png',
      description: 'Первая в мире плавучая ферма по производству молочной продукции.',
    },
    {
      title: 'Floating Forest',
      location: 'Milan, Italy',
      image: 'https://cdn.poehali.dev/files/615cc142-9000-46c4-aae9-7ddc969999ba.png',
      description: 'Уникальный плавучий лес, создающий зеленое пространство в городской среде.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#2D3561] text-white">
      <header className="fixed top-0 w-full bg-[#2D3561]/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wider">
            ARCHIDEA<sup className="text-xs">®</sup>
          </div>

          <nav className="hidden md:flex gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm uppercase tracking-wide hover:text-white/70 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#2D3561] border-white/10">
              <nav className="flex flex-col gap-6 mt-8">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg uppercase tracking-wide hover:text-white/70 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <section id="home" className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="text-sm uppercase tracking-widest text-white/60 mb-4">#70</div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                ARCHIDEA
              </h1>
              <div className="text-sm md:text-base leading-relaxed text-white/80 space-y-4">
                <p>
                  ARCHIDEA IS A BI-ANNUAL MAGAZINE THAT FEATURES PROFILES WELL KNOWN AND
                  UPCOMING ARCHITECTS FROM ALL OVER THE WORLD CONNECTED TO THE ARCHITECT
                  PRESENTED ARCHIDEA COVERS A TYPICAL ARCHITECTURAL FEATURE THAT IS LINKED
                  TO THE ARCHITECTS WORK. THE MAGAZINE IS PUBLISHED BY FORBO FLOORING SYSTEMS
                  AND ALSO CONTAINS SOME OF THE LATEST PROJECTS IN WHICH OUR FLOOR COVERING
                  HAS BEEN INSTALLED.
                </p>
                <p className="text-xs">
                  ALL RIGHTS RESERVED. YOU MAY CONTACT THE ARCHIDEA PUBLISHER SHOULD YOU WISH
                  TO USE PART OF THIS MAGAZINE. ALL EFFORTS ARE MADE TO ENSURE THAT THE
                  COPYRIGHT ACT HAS BEEN COMPLIED WITH.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <img
                src="https://cdn.poehali.dev/files/ce21bfd8-ea98-46f4-9784-a65c3d128cfc.png"
                alt="Magazine Cover"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm">
            <Icon name="ArrowRight" className="h-4 w-4" />
            <span className="uppercase tracking-wide">
              FOR INFORMATION ON FORBO FLOORING'S VAST RANGE OF PRODUCTS VISIT{' '}
              <a href="https://www.forbo-flooring.com" className="underline">
                WWW.FORBO-FLOORING.COM
              </a>
            </span>
          </div>
        </div>
      </section>

      <section id="content" className="py-16 px-4 bg-white/5">
        <div className="container mx-auto">
          <div className="flex items-start justify-between mb-8">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider">Content</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-transparent border-white/10 overflow-hidden group cursor-pointer hover:border-white/30 transition-all">
              <CardContent className="p-0">
                <img
                  src="https://cdn.poehali.dev/files/5c0f158b-dfcb-4f42-af3b-e42b10e07a24.png"
                  alt="Content Preview"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Matthijs Bouw Interview</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    "Climate change is forcing us to learn how to deal with complexity"
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div className="border-l-2 border-white/20 pl-6">
                <h4 className="text-sm uppercase tracking-wider text-white/60 mb-2">
                  Interview
                </h4>
                <h3 className="text-xl font-bold mb-2">Matthijs Bouw</h3>
                <p className="text-white/70 text-sm">
                  Focus on floating architecture and sustainable design principles
                </p>
              </div>

              <div className="border-l-2 border-white/20 pl-6">
                <h4 className="text-sm uppercase tracking-wider text-white/60 mb-2">
                  Highlight
                </h4>
                <h3 className="text-xl font-bold mb-2">Forbo Flooring Systems</h3>
                <p className="text-white/70 text-sm">
                  Latest projects and innovations in sustainable flooring solutions
                </p>
              </div>

              <div className="border-l-2 border-white/20 pl-6">
                <h4 className="text-sm uppercase tracking-wider text-white/60 mb-2">
                  Projects
                </h4>
                <h3 className="text-xl font-bold mb-2">New Projects</h3>
                <p className="text-white/70 text-sm">
                  Explore the latest architectural achievements around the world
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="interview" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider mb-12">
            Interview
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
              <img
                src="https://cdn.poehali.dev/files/ce21bfd8-ea98-46f4-9784-a65c3d128cfc.png"
                alt="Matthijs Bouw"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-3xl font-bold">Matthijs Bouw</h3>
                <p className="text-white/80 italic mt-2">
                  "Climate change is forcing us to learn how to deal with complexity"
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-sm leading-relaxed text-white/80">
                <p className="mb-4">
                  For Lower Manhattan, Matthijs Bouw of One Architecture is working on a
                  floating system that will also become an attractive public space. We need
                  to say goodbye to the idea that we can control nature, says Bouw. We
                  cannot keep building and building dykes.
                </p>
                <p>
                  The landscape designer and urban planner has been working on several
                  projects in New York for over a year now. Projects which focus on the
                  risk of flooding caused by extreme weather. His work is about much more
                  than just moving things away from water. His view is more nuanced. You
                  can't avoid water in the Netherlands, so it is the starting point of
                  everything: housing, projects and landscapes.
                </p>
              </div>

              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                <span className="mr-2">Читать полностью</span>
                <Icon name="ArrowRight" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 px-4 bg-white/5">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider mb-12">
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-transparent border-white/10 overflow-hidden group cursor-pointer hover:border-white/30 transition-all"
              >
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/60 text-sm uppercase tracking-wider mb-3">
                      {project.location}
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider mb-8">
            О журнале
          </h2>

          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              ARCHIDEA — это двухгодичный архитектурный журнал, который представляет профили
              известных и начинающих архитекторов со всего мира. Каждый выпуск посвящен
              уникальной архитектурной теме, связанной с работой представленных архитекторов.
            </p>
            <p>
              Журнал издается компанией Forbo Flooring Systems и содержит информацию о
              новейших проектах, в которых были установлены наши напольные покрытия.
            </p>
            <p>
              Мы фокусируемся на инновационных решениях в области устойчивой архитектуры,
              плавающих конструкциях и современных подходах к городскому планированию.
            </p>
          </div>
        </div>
      </section>

      <footer id="contact" className="py-16 px-4 bg-[#1A1F2C]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ARCHIDEA<sup>®</sup></h3>
              <p className="text-white/60 text-sm">
                Bi-annual architecture magazine by Forbo Flooring Systems
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 uppercase tracking-wider">Контакты</h4>
              <div className="space-y-2 text-white/60 text-sm">
                <p>Email: info@archidea-magazine.com</p>
                <p>Web: www.forbo-flooring.com</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 uppercase tracking-wider">Социальные сети</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="hover:bg-white/10">
                  <Icon name="Facebook" className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-white/10">
                  <Icon name="Instagram" className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-white/10">
                  <Icon name="Linkedin" className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
            <p>© 2025 ARCHIDEA. All rights reserved. Published by Forbo Flooring Systems.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
