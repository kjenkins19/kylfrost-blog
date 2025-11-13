import React from 'react';
import ResumeLayout from "../components/ResumeLayout.jsx";

const SplitSection = ({ children, title = ' ' }) => (<div className="grid grid-cols-6 print:grid-cols-6 pb-2">
  <div className="col-span-1 print:col-span-1">
    <p className="font-bold">{title}</p>
  </div>
  <div className="md:col-span-5 print:col-span-5">
    {children}
  </div>
</div>);

const Resume = ({ address, phone, email }) => {
  return (<ResumeLayout>
    <div className="space-y-1 print:text-sm">
      {/* Page Header */}
      <header className="text-center pb-2">
        <h1 className="text-2xl font-bold text-black">
          Kyle Jenkins
        </h1>
        <hr/>
        {address && phone && email ? (<div className="flex justify-between text-gray-700">
          <p>{address}</p>
          <p>{phone}</p>
          <p>{email}</p>
        </div>) : (<p className="text-sm text-gray-400 max-w-2xl mx-auto italic">
          Contact information hidden for online privacy. Contact me via LinkedIn for full version
        </p>)}
      </header>

      <SplitSection title="OBJECTIVE">
        <p>
          To apply and expand my expertise in software development by designing trustworthy solutions that bridge
          business needs and user experience driving value through both technical excellence and collaboration.
        </p>
      </SplitSection>

      <SplitSection title="SKILLS">
        <p>
              <span className="font-bold">
                Frontend Technologies:&nbsp;
              </span>
          JavaScript, TypeScript, React, Angular, jQuery, HTML, CSS, SASS/SCSS, Tailwind CSS, Ajax, Storybook
        </p>
        <p>
          <span className="font-bold">Backend and Data Technologies: </span>
          Node.js, GraphQL, PHP, ASP, JSP, Python, Ruby, Redis, SQL Server, MySQL, PostgreSQL, Next.js, NGINX
        </p>
        <p>
              <span className="font-bold">
                DevOps, Automation and Cloud Technologies:&nbsp;
              </span>
          AWS, Docker, Terraform, Jenkins, Helm, Git, Gitlab, Github, Jest, Playwright, Cucumber, Splunk, Dynatrace,
          DataDog
        </p>
        <p>
              <span className="font-bold">
                Development Methodologies and Tools:&nbsp;
              </span>
          Agile, Scrum, Kanban, Jira, Confluence, Mural, DevOps, Azure DevOps, Model-View-Controller (MVC), Test
          Driven Development (TDD), Acceptance Test Driven Development (ATDD)
        </p>
        <p>
              <span className="font-bold">
                Development Environment Technologies:&nbsp;
              </span>
          IntelliJ IDEA, PyCharm, RubyMine, PHPStorm, Eclipse, VSCode, Webpack, NPM, Yarn, Rollup, ESLint, Prettier
        </p>
        <p>
              <span className="font-bold">
                AI / Agentic AI Technologies:&nbsp;
              </span>
          ChatGPT, Junie, GPT-5, Sonnet 4, Gemini
        </p>
        <p>
            <span className="font-bold">
              Other Technologies:&nbsp;
            </span>
          Linux, Debian, Ubuntu, Bash, zsh, Windows Server, Websphere, JSON, Drupal, Prompt Engineering, Launch
          Darkly, Adobe Target
        </p>
      </SplitSection>

      <SplitSection title="EXPERIENCE">
        <div className="flex justify-between">
          <p className="font-bold">Improving - Principal Consultant</p>
          <p className="italic">2014 - Present</p>
        </div>
        <div className="grid grid-cols-1 gap-2 print:grid-cols-1">
          <div>
            <p className="italic">AI OWL - DevOps Engineer, Cloud Architect, Full Stack Developer</p>
            <ul className="list-disc list-inside ml-3">
              <li>
                Integrated development best practices to increase consistency, security, and reliability across a new
                application
              </li>
              <li>
                Migrated a ClickOps built application in EC2 to AWS ECS with Docker and Terraform
              </li>
              <li>
                Fully automated deployment pipelines integrating Trunk Based Development with Github Actions
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
                Developed components for integration for cardinalhealth.com and toysrus.com.
              </li>
              <li>
                Modified custom NodeJS Framework used for defining handlebars components
              </li>
            </ul>
          </div>
        </div>
      </SplitSection>
      {/*eHealth Data Solutions*/}
      <SplitSection>
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
      </SplitSection>
      <SplitSection title="EDUCATION">
        <div className="flex justify-between">
          <p className="font-bold"><i>Bachelor of Arts</i>, Mathematics</p>
          <p className="italic">2003 - 2007</p>
        </div>
        <p>Cleveland State University, Cleveland, Ohio</p>
        <p>Minor: Computer and Information Systems</p>
      </SplitSection>
    </div>
  </ResumeLayout>);
};

export default Resume;