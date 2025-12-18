import React from 'react';
import Layout from '../components/Layout.jsx';

const Sessionize = ({ name, sessionizeKey, topics }) => (<div className="flex">
  <p>
    <a className="text-primary font-bold" href={`https://sessionize.com/${sessionizeKey}`}>
      {name}:&nbsp;
    </a>
  </p>
  <p>
    {topics}
  </p>
</div>)

const speakerList = [{
  name: 'Me! Kyle Jenkins',
  sessionizeKey: 'kyle-jenkins',
  topics: 'Soft Skills/Trust/Teamwork, Docker, The Six Types of Working Genius, Agile'
},{
  name: 'Bob Fornal',
  sessionizeKey: 'bob-fornal',
  topics: 'Front End Technologies, Testing / QA'
},{
  name: 'Cassandra Faris',
  sessionizeKey: 'cassandra-faris',
  topics: 'Professional Networking, Personal Branding, Communication, Diversity'
},{
  name: 'Chris Steele',
  sessionizeKey: 'chrissteele',
  topics: '.NET, Azure, Leadership'
},{
  name: 'Craig Stuntz',
  sessionizeKey: 'craig-stuntz',
  topics: 'Threat Modeling, Wierd Tech'
},{
  name: 'Damian Synadinos',
  sessionizeKey: 'damian-synadinos',
  topics: 'Soft Skills, QA (Note: Professional Keynote Speaker)'
},{
  name: 'Drake Lundstrom',
  sessionizeKey: 'drake-lundstrom',
  topics: 'How to Learn, DevOps, Azure'
},{
  name: 'Guy Royse',
  sessionizeKey: 'guyroyse',
  topics: 'Information & Communications Technology, Redis'
},{
  name: 'Jeff Blankenburg',
  sessionizeKey: 'jeffblankenburg',
  topics: 'Alexa, Cloud'
},{
  name: 'Jeffrey Miller',
  sessionizeKey: 'xagronaut',
  topics: 'Information & Communications Technology'
},{
  name: 'Jonathan Danylko',
  sessionizeKey: 'jonathan-danylko',
  topics: '.NET, SQL, Career Growth'
},{
  name: 'Mark Tinderholt',
  sessionizeKey: 'markti',
  topics: 'Cloud, Azure, .NET'
},{
  name: 'Matthew Hope Eland',
  sessionizeKey: 'matt-eland',
  topics: 'AI, .NET'
},{
  name: 'Michael Eaton',
  sessionizeKey: 'matt-eland',
  topics: 'Leadership, Soft Skills'
},{
  name: 'MJ Lindeman',
  sessionizeKey: 'mjeaton',
  topics: 'AI, Quantum Physics'
},{
  name: 'Stephanie Wightman',
  sessionizeKey: 'stephanie-wightman',
  topics: ' Information & Communications Technology'
}]

const ColumbusSpeakers = () => {
  return (<Layout
    title="Kyle Jenkins - Columbus Speakers"
    description="Other Columbus Speakers that I like"
  >
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-2xl md:text-5xl font-bold text-primary mb-6">
          Columbus Speakers
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          This page is a simple list of speakers in Columbus in hopes to help local meetups and conferences.
        </p>
      </section>

      <section>
        <p className="italic">The topics listed are very high level, I highly recommend peeking into each one and seeing what they can provide.</p>
      </section>

      {/* Recent Blog Posts */}
      {speakerList.map(({ name, sessionizeKey, topics }) => (
        <Sessionize key={name} name={name} sessionizeKey={sessionizeKey} topics={topics}/>))}
    </div>
  </Layout>);
};

export default ColumbusSpeakers;