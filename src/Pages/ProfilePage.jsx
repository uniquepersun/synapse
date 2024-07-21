import React from 'react';

const profile = {
  name: 'AGoodDude',
  email: 'thisismyemail@gmail.com',
  bio: 'A passionate developer and a dedicated student!',
  avatar: 'https://randomuser.me/api/portraits/lego/3.jpg',
  location: 'Fairy Land, Fusiana',
  phone: '123-456-7890',
  skills: ['React', 'Tailwind CSS', 'can study chemistry for 10 hours straight!'],
  hobbies: ['Reading', 'Traveling', 'Gaming', 'Cooking'],
  socialMedia: {
    twitter: 'https://twitter.com/notmytwitter',
    linkedin: 'https://linkedin.com/in/notmylinkedin',
    github: 'https://github.com/notmygithub',
  },
};

const ProfilePage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen shadow-lg">
      <h1 className="text-4xl font-bold text-purple-700 mb-8 text-center">Profile Page</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center space-x-4 p-6 bg-purple-400 text-white">
          <img
            className="w-24 h-24 rounded-full object-cover"
            src={profile.avatar}
            alt="Avatar"
          />
          <div>
            <h2 className="text-2xl font-semibold">{profile.name}</h2>
            <p>{profile.bio}</p>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Personal Information</h3>
            <p className="text-gray-600">Email: {profile.email}</p>
            <p className="text-gray-600">Phone: {profile.phone}</p>
            <p className="text-gray-600">Location: {profile.location}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {profile.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Hobbies</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {profile.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Social Media</h3>
            <ul className="list-inside space-y-1 text-gray-600">
              <li>
                <a href={profile.socialMedia.twitter} className="text-purple-700 hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href={profile.socialMedia.linkedin} className="text-purple-700 hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={profile.socialMedia.github} className="text-purple-700 hover:underline">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
