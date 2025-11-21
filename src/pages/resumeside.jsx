import React from 'react';
import ResumeLayout from "../components/ResumeLayout.jsx";

const SplitSection = ({ children, title = ' ' }) => (<div className="grid grid-cols-6 print:grid-cols-6 pb-2">
  <div className="col-span-1 print:col-span-1">
    <p className="font-bold">{title}</p>
  </div>
  <div className="col-span-5 print:col-span-5">
    {children}
  </div>
</div>);

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
        <h2 className="font-bold">EXPERIENCE</h2>
        <div className="pb-2">
          <div className="flex justify-between">
            <p className="font-bold">Improving - Principal Consultant</p>
            <p className="italic">2015 - Present</p>
          </div>
          <div className="grid grid-cols-1 gap-2 print:grid-cols-1">
            <div>
              <p className="italic">AI OWL - DevOps Engineer, Cloud Architect, Full Stack Developer</p>
              <ul className="list-disc list-inside ml-3">
                <li>
                  Integrated development best practices to increase consistency, security, and reliability across a new
                  application.
                </li>
                <li>
                  Migrated a ClickOps built application in AWS EC2 to AWS ECS with Docker and Terraform.
                </li>
                <li>
                  Fully automated deployment pipelines integrating Trunk Based Development with Github Actions.
                </li>
              </ul>
            </div>
            <div>
              <p className="italic">Mattress Firm - Architect, Front-end Engineer</p>
              <ul className="list-disc list-inside ml-3">
                <li>
                  Led feature implementation and architectural guidance across multiple teams using GraphQL, React,
                  Storybook, Next.js, Node.js, TypeScript.
                </li>
                <li>
                  Advised on CDN and cookie management for A/B testing, standardized logging, and improved local
                  environments.
                </li>
                <li>
                  Managed daily standups and contributed to UI/UX design.
                </li>
              </ul>
            </div>
            <div>
              <p className="italic">Abercrombie & Fitch - Architect, Full Stack Developer</p>
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
                  design system structured on Atomic Design concepts.
                </li>
                <li>
                  Provided guidance and work towards migrating legacy JSPs to Node.js and React Microservices
                  incrementally delivering new valuable features without needing a full re-write.
                </li>
              </ul>
            </div>
            <div>
              <p className="italic">Highlights for Children's Magazine - Front-end Engineer, DevOps Engineer</p>
              <ul className="list-disc list-inside ml-3">
                <li>
                  Modernized and maintained multiple Drupal-based websites.
                </li>
                <li>
                  Developed CI/CD jobs using Jenkins.
                </li>
              </ul>
            </div>
            <div>
              <p className="italic">Resource Ammaratti - Front-end Engineer</p>
              <ul className="list-disc list-inside ml-3">
                <li>
                  Developed components for integration for Cardinal Health and Toys R Us websites.
                </li>
                <li>
                  Modified custom NodeJS Framework used for defining handlebars components.
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
                Maintain and improve two healthcare-related subscriber websites powered by HTML, JavaScript, and CSS.
                Site-specific work such as working with Windows-based ASP/MSSQL backend for one; and Linux-based
                PHP/PostgreSQL with an MVC framework for the other.
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

        <div className="pb-2">
          <h2 className="font-bold">EDUCATION</h2>
          <div className="flex justify-between">
            <p className="font-bold"><i>Bachelor of Arts</i>, Mathematics</p>
            <p className="italic">2003 - 2007</p>
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
          <p>IntelliJ / VSCode</p>
          <p>Git / GitHub / GitLab</p>
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