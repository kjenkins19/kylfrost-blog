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
  name: 'Drake Lundstrom',
  sessionizeKey: 'drake-lundstrom',
  topics: 'How to Learn, DevOps, Azure'
},{
  name: 'Guy Royse',
  sessionizeKey: 'guyroyse',
  topics: 'Information & Communications Technology, Redis'
},{
  name: 'Jeffrey Miller',
  sessionizeKey: 'xagronaut',
  topics: 'Information & Communications Technology'
},{
  name: 'Jonathan Danylko',
  sessionizeKey: 'jonathan-danylko',
  topics: '.NET, SQL, Career Growth'
},{
  name: 'MJ Lindeman',
  sessionizeKey: 'mj-lindeman',
  topics: 'AI, Quantum Physics'
}]

const ColumbusSpeakers = () => {
  return (<Layout
    title="Kyle Jenkins - Columbus Speakers"
    description="Other Columbus Speaker that I like"
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
        <Sessionize name={name} sessionizeKey={sessionizeKey} topics={topics}/>))}
    </div>
  </Layout>);
};

export default ColumbusSpeakers;