import React from 'react';
import ResumeLayout from "../components/ResumeLayout.jsx";

const Resume = ({ address, phone, email }) => {
  return (<ResumeLayout>
    {/*<div className="print:hidden text-xs">When printing, remove headers and set margins to minimum</div>*/}
    <div className="grid grid-cols-9 print:grid-cols-9 gap-4">
      <div className="col-span-5 print:col-span-5">
        <h1 className="text-2xl font-bold text-black">
          Kyle Jenkins
        </h1>
        <p className="italic">Serving Humanity Through Technology and Teamwork</p>
      </div>
      <div className="col-span-2 print:col-span-2">
        <p>Software Engineer<br/>and Consultant</p>
      </div>
      <div className="col-span-2 print:col-span-2">
        {address && phone && email ? (<>
          <p>{email}</p>
          <p>{phone}</p>
          <p>https://kylfrost.com</p>
        </>) : (<p className="text-sm text-gray-400 max-w-2xl mx-auto italic">
          Contact information hidden for online privacy. Contact me via LinkedIn for full version
        </p>)}
      </div>
      <div className="col-span-7 print:col-span-7">
        <h2 className="font-bold">PROFESSIONAL SUMMARY</h2>
        <div className="pb-2">
          <p>
            Technology leader and consultant with deep experience in software development and architecture and cloud
            enabled systems, paired with a strong focus on leadership effectiveness and organizational trust. I
            specialize in helping teams deliver sound technical solutions under real world constraints, while coaching
            the team to navigate change with clarity and integrity. My approach blends technical rigor with emotional
            intelligence, enabling scalable systems, resilient teams, and sustainable delivery.
          </p>
        </div>

        <h2 className="font-bold mt-3">EXPERIENCE</h2>
        <div className="pb-2">
          <div className="flex justify-between">
            <p className="font-bold">Improving - Principal Consultant</p>
            <p className="italic">2015 - Present</p>
          </div>
          <div className="grid grid-cols-1 gap-2 print:grid-cols-1">
            <div>
              <ul className="list-disc list-inside ml-3">
                <li>
                  Developed automated flows with Power Automate for capturing data for local community events for our
                  internal community initiative.
                </li>
                <li>
                  Facilitated multiple internal courses across a variety of topics including Trust, Leadership, and The
                  6 Types of Working Geniuses.
                </li>
              </ul>
            </div>
            <div>
              <p className="italic">AI OWL (Client) - DevOps Engineer, Cloud Architect, Full Stack Developer</p>
              <ul className="list-disc list-inside ml-3">
                <li>
                  Integrated development best practices to increase consistency, security, reliability, and
                  accessibility across a new application.
                </li>
                <li>
                  Migrated a ClickOps built application in AWS EC2 to AWS ECS with Docker, AWS ECR and Terraform.
                </li>
                <li>
                  Fully automated deployment pipelines integrating Trunk Based Development with Github Actions.
                </li>
                <li>
                  Setup Unit and Behavior Testing with Playwright for an Angular Frontend, Python Backend website,
                  updating features as needed.
                </li>
              </ul>
            </div>
            <div>
              <p className="italic">Mattress Firm (Client) - Architect, Front-end Engineer</p>
              <ul className="list-disc list-inside ml-3">
                <li>
                  Led feature implementation and architectural guidance across multiple teams using GraphQL, React,
                  Storybook, Next.js, Node.js, TypeScript.
                </li>
                <li>
                  Advised on standardized logging and improved local environments.
                </li>
                <li>
                  Enhanced documentation on current and proposed architectures with Azure DevOps (ADO), utilizing
                  markdown and Mermaid diagrams.
                </li>
                <li>
                  Rearchitected the A/B Testing Setup to properly manage caching with the CDN through properly cookie
                  management.
                </li>
                <li>
                  Managed daily standups for cross team collaboration and project management.
                </li>
                <li>
                  Actively contributed to UI/UX design to promote common standards for better user workflow.
                </li>
                <li>
                  Utilized Gemini AI to speed up the development of both code and tests, and actively promoted it
                  throughout the teams to use.
                </li>
              </ul>
            </div>
            <div>
              <p className="italic">Abercrombie & Fitch (Client) - Architect, Full Stack Developer</p>
              <ul className="list-disc list-inside ml-3">
                <li>
                  Development and maintenance of the primary e-commerce and marketing website within the IBM WebSphere
                  ecommerce platform, maintaining styles and features for multiple brands.
                </li>
                <li>
                  Implemented major features and redesigns utilizing JSP, HTML, CSS/SASS, and JavaScript. JavaScript
                  modules included jQuery, RequireJS, handlebars, and Jasmine.
                </li>
                <li>
                  Worked closely with the design and business teams to provide high quality features with strict
                  deadlines.
                </li>
                <li>
                  Utilized Test Driven Development to help improve the underlying architecture and maintainability of
                  the code.
                </li>
                <li>
                  Played a major role in integrating Level AA Web Content Accessibility Guidelines and the creation of a
                  design system utilizing Storybook and Rollup structured on Atomic Design concepts.
                </li>
                <li>
                  Provided guidance and work towards migrating legacy JSPs to Node.js and React Microservices
                  incrementally delivering new valuable features without needing a full re-write.
                </li>
                <li>
                  Defined custom middleware instances with ExpressJS and KoaJS to manage server rendered instances for migration to React.
                </li>
                <li>
                  Provided extensive updates to the documentation process and onboarding communications.
                </li>
                <li>
                  Optimized GraphQL calls with caching integrations with both CDN and Redis instances.
                </li>
              </ul>
            </div>
            <div>
              <p className="italic">Highlights for Children's Magazine (Client) - Front-end Engineer, DevOps
                Engineer</p>
              <ul className="list-disc list-inside ml-3">
                <li>
                  Modernized and maintained multiple Drupal-based websites, including custom PHP based plugins.
                </li>
                <li>
                  Actively maintained MySQL instances to optimize performance.
                </li>
                <li>
                  Created CI/CD jobs using Jenkins to facilitate automated deployments for development and production
                  environments.
                </li>
              </ul>
            </div>
            <div>
              <p className="italic">Resource Ammaratti (Client) - Front-end Engineer</p>
              <ul className="list-disc list-inside ml-3">
                <li>
                  Developed front end components with Handlebars, SASS/SCSS, and JQuery/JavaScript for integration with
                  Adobe CMS for Cardinal Health and FAO Schwarz websites.
                </li>
                <li>
                  Modified a custom in-house NodeJS Framework used for defining handlebars components.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pb-2">
          <div className="flex justify-between">
            <p className="font-bold">eHealth Data Solutions - Full Stack Software Engineer</p>
            <p className="italic">2007 - 2014</p>
          </div>
          <div>
            <ul className="list-disc list-inside ml-3">
              <li>
                Serve as Scrum Master for a development team by insulating working groups from distraction. Tailored
                responses to specific project challenges: smooth integration of working group
                components; nimble adjustments based on real-time client feedback; and challenging individuals to push
                themselves to the edge of their skill sets.
              </li>
              <li>
                Managed Jira and Confluence instances to promote efficient workflows and gather analytics for project
                management.
              </li>
              <li>
                Maintain and improve two healthcare-related subscriber websites powered by HTML, JavaScript, and CSS.
              </li>
              <li>
                Strategize and implement an incremental based migration for one product from the ASP/MSSQL backend to
                the PHP/PostgreSQL implementation with minimal impact on the users, while also allowing visible,
                user-based improvements.
              </li>
              <li>
                Perform Acceptance Test Driven Development (ATDD) with Ruby and Cucumber.
              </li>
              <li>
                Make use of test-driven development (TDD) principles, tools, and techniques.
              </li>
            </ul>
          </div>
        </div>

        {/*Education*/}
        <h2 className="font-bold mt-3">EDUCATION</h2>
        <div className="pb-2">
          <div className="flex justify-between">
            <p className="font-bold"><i>Bachelor of Arts</i>, Mathematics</p>
            <p className="italic">2003 - 2007</p>
          </div>
          <p>Cleveland State University, Cleveland, Ohio</p>
          <p>Minor: Computer and Information Systems</p>
        </div>

        {/*Certifications*/}
        <h2 className="font-bold mt-3">CERTIFICATIONS</h2>
        <div className="pb-2">
          <div className="flex justify-between">
            <div>
              <p className="font-bold">The Six Types of Working Genius Certification</p>
              <p>The Six Types of Working Genius</p>
              <p className="italic">Issued Sep 2021</p>
            </div>
            <div>
              <p className="font-bold">Certified Professional Scrummaster</p>
              <p>Scrum.org</p>
              <p className="italic">Issued Dec 2014</p>
            </div>
          </div>
          <p>Cleveland State University, Cleveland, Ohio</p>
          <p>Minor: Computer and Information Systems</p>
        </div>
      </div>
      <div className="col-span-2 print:col-span-2">
        <h2 className="font-bold">SKILLS</h2>
        <div>
          <p>Node.js / GraphQL</p>
          <p>JavaScript / TypeScript</p>
          <p>React / Angular</p>
          <p>HTML / CSS / UI/UX</p>
          <p>SASS/SCSS / Tailwind</p>
          <p>Storybook / Mermaid</p>
          <p>Jest / Playwright</p>
          <p>ExpressJS / KoaJS</p>
          <p>NGINX / Next.js</p>
          <p>Webpack / Rollup</p>
          <p>ASP / JSP / PHP</p>
          <p>Python / Ruby</p>
          <p>MSSQL / PostgreSQL</p>
          <p>MySQL / Redis</p>
          <p>DevOps / Cloud / AWS</p>
          <p>Docker / Terraform</p>
          <p>Jenkins / Bamboo</p>
          <p>AI / Agentic AI</p>
          <p>GPT / Sonnet / Gemini</p>
          <p>Splunk / Dynatrace</p>
          <p>Datadog</p>
          <p>Agile / Scrummaster</p>
          <p>Scrum / Kanban</p>
          <p>Jira / Confluence</p>
          <p>Azure Devops / Mural</p>
          {/*  Helm, Cucumber, jQuery Model-View-Controller (MVC), Test Driven Development (TDD), Acceptance Test Driven Development (ATDD)*/}
          {/*  ChatGPT, Junie, GPT-5, Sonnet 4, Gemini */}
          {/*IntelliJ IDEA, PyCharm, RubyMine, PHPStorm, Eclipse, VSCode, Webpack, NPM, Yarn, Rollup, ESLint, Prettier*/}
          {/*Linux, Debian, Ubuntu, Bash, zsh, Windows Server, Websphere, JSON, Drupal, Prompt Engineering, Launch Darkly, Adobe Target*/}
        </div>
        <h2 className="font-bold pt-8">TOOLS</h2>
        <div>
          <p>IntelliJ / VSCode</p>
          <p>PHPStory / Rubymine</p>
          <p>Antigravity</p>
          <p>Git / GitHub / GitLab</p>
        </div>
        <h2 className="font-bold pt-8">EXPLORATORY SKILLS</h2>
        <div>
          <p>.NET / Java</p>
          <p>Helm / Kubernetes</p>
          <p>Enterprise Agents / RAG</p>
        </div>
      </div>
    </div>
  </ResumeLayout>);
};

export default Resume;