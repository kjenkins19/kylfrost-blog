import React from 'react';
import Layout from '../components/Layout.jsx';

const ListItem = ({
  name,
  url,
  topics,
  subEvents = []
}) => (<div>
  <div className="flex">
    <p>
      <a className="text-primary font-bold" href={url} target="_blank">
        {name}:&nbsp;
      </a>
    </p>
    <p>
      {topics}
    </p>
  </div>
  {subEvents.length ? (<div>
    <p>Including, but not limited to:</p>
    <ul className="list-disc list-inside ml-3">
      {subEvents.map((event) => (<li>{event}</li>))}
    </ul>
  </div>) : (<></>)}
</div>)

const meetupList = [{
  name: 'ColumbusJS',
  url: 'https://www.meetup.com/columbusjs/',
  topics: 'JavaScript and all the wonderfully adjacent technology'
}, {
  name: 'Buckeye Cocoa Programmers',
  url: 'https://www.meetup.com/buckeye-cocoa/',
  topics: 'iOS Development, all things Apple'
}, {
  name: 'CBusDATA - Central Ohio Microsoft Data Platform User Group',
  url: 'https://www.meetup.com/cbuspass/',
  topics: 'Data, SQL'
}, {
  name: 'Central Ohio Azure',
  url: 'https://www.meetup.com/central-ohio-azure/',
  topics: 'Azure, Cloud, DevOps'
}, {
  name: 'Central Ohio .NET Developer\'s Group (CONDG)',
  url: 'https://www.meetup.com/central-ohio-net-developers-group-condg/',
  topics: '.NET, Microsoft Technologies'
}, {
  name: 'The Central Ohio Python Users Group',
  url: 'https://www.meetup.com/central-ohio-python-users-group/',
  topics: 'Python'
}, {
  name: 'Christians in Tech - Columbus',
  url: 'https://www.meetup.com/citcbus/',
  topics: 'Service Projects, Any Tech'
}, {
  name: 'Columbus AI',
  url: 'https://www.meetup.com/columbus-ai/',
  topics: 'AI'
}, {
  name: 'Columbus Arduino Raspberry Pi Enthusiasts (CARPE)',
  url: 'https://www.meetup.com/columbus-arduino-raspberry-pi-enthusiasts/',
  topics: 'Hardware'
}, {
  name: 'Columbus Atlassian Community Events',
  url: 'https://www.meetup.com/columbus-atlassian-community-events/',
  topics: 'Atlassian Projects (Jira, Confluence, etc.)'
}, {
  name: 'Columbus AWS (Amazon Web Services) Meetup',
  url: 'https://www.meetup.com/columbus-aws-amazon-web-services-meetup/',
  topics: 'AWS'
}, {
  name: 'Columbus Code & Coffee',
  url: 'https://www.meetup.com/columbus-code-and-coffee/',
  topics: 'All Tech, Collaborate, Presentations, Networking'
}, {
  name: 'Columbus Unity User Group',
  url: 'https://www.meetup.com/columbus-unity-user-group/',
  topics: 'Unity, Gaming, VR'
}, {
  name: 'Columbus Ruby Brigade',
  url: 'https://www.meetup.com/columbusrb/',
  topics: 'Ruby'
}, {
  name: 'DevOps Columbus',
  url: 'https://www.meetup.com/devops-columbus/',
  topics: 'DevOps, Cloud, AWS, Azure'
}, {
  name: 'The Central Ohio Gamedev Group',
  url: 'https://www.meetup.com/the-cogg/',
  topics: 'Game Development'
}, {
  name: 'WebDev Columbus',
  url: 'https://www.meetup.com/webdev-columbus/',
  topics: 'Web'
}];

const orgList = [
  {
    name: 'TechLife Columbus',
    url: 'https://www.meetup.com/techlifecolumbus/',
    topics: 'Helps Coordinate Lots of events',
    subEvents: ['Agile Coaching Circle', 'Code Jam Columbus', 'NFT AI ART Columbus', 'Data & Analytics', 'Pair Programming & Mentoring'],
  }, {
    name: 'OhioX',
    url: 'https://www.ohiox.org/events',
    topics: 'Nonprofit membership organization that connects, promotes, and advocates for Ohio’s tech growth'
  }, {
    name: 'Tech Community Coalition (TCC)',
    url: 'https://www.eventbrite.com/o/tech-community-coalition-55321084703',
    topics: 'non-profit corporation whose mission is to enable the community, collaboration, and education of technology professionals, entrepreneurs, and innovators through charity and education including organizing and facilitating community events'
  }
];

const ColumbusMeetups = () => {
  return (<Layout
    title="Kyle Jenkins - Columbus Tech Meetups and Events"
    description="Columbus Tech Meetups and Events List"
  >
    <div className="space-y-3">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-2xl md:text-4xl font-bold text-primary mb-6">
          Columbus Tech Meetups and Events
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          This page is a simple list of meetups and organizations in hopes to connect the community with local meetups and events.
        </p>
      </section>

      <h2 className="text-xl font-bold pb-2">Meetups</h2>
      {meetupList.map(({
        name,
        url,
        topics,
        subEvents
      }) => (<ListItem key={name} name={name} url={url} topics={topics} subEvents={subEvents}/>))}

      <h2 className="text-xl font-bold pb-2 pt-6">Organizations</h2>
      {orgList.map(({
        name,
        url,
        topics,
        subEvents
      }) => (<ListItem key={name} name={name} url={url} topics={topics} subEvents={subEvents}/>))}
    </div>
  </Layout>);
};

export default ColumbusMeetups;