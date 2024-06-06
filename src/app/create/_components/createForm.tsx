/* eslint-disable @typescript-eslint/no-floating-promises */
'use client'

import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

export function CreateForm(){
const [form, setForm] = useState({
    username: '',
    name: '',
    bio: '',
    image: '',
    links: '',
    socialLinks: '',
  });
  // const createProfile = trpc.useMutation(['createProfile'], {
  //   onSuccess: () => {
  //     router.push(`/${form.username}`);
  //   },
  //   onError: (error) => {
  //     alert(error.message);
  //   },
  // });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //const { username, name, bio, image, links, socialLinks } = form;

    // await createProfile.mutateAsync({
    //   username,
    //   name,
    //   bio,
    //   image,
    //   links: links.split(','),
    //   socialLinks: socialLinks.split(','),
    // });
    console.debug('createProfile', form);
  };

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      console.debug(session);
    }
    fetchSession()
  }, []);

  return (
<main className="min-h-screen bg-black text-green-500 font-mono">
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-extrabold text-center mb-8">Create Your Profile</h1>
        <div className="flex flex-col md:flex-row justify-between">
          {/* Form */}
          <div className="md:w-1/2 bg-gray-900 p-8 rounded-lg shadow-lg mb-8 md:mb-0 md:mr-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-green-500 mb-2" htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 text-green-500 border border-gray-700 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-green-500 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 text-green-500 border border-gray-700 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-green-500 mb-2" htmlFor="bio">Bio</label>
                <textarea
                  id="bio"
                  name="bio"
                  value={form.bio}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 text-green-500 border border-gray-700 rounded"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-green-500 mb-2" htmlFor="image">Image URL</label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 text-green-500 border border-gray-700 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-green-500 mb-2" htmlFor="links">Links (comma-separated)</label>
                <input
                  type="text"
                  id="links"
                  name="links"
                  value={form.links}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 text-green-500 border border-gray-700 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-green-500 mb-2" htmlFor="socialLinks">Social Links (comma-separated)</label>
                <input
                  type="text"
                  id="socialLinks"
                  name="socialLinks"
                  value={form.socialLinks}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-800 text-green-500 border border-gray-700 rounded"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-500 text-black font-semibold rounded hover:bg-green-600"
                >
                  Create Profile
                </button>
              </div>
            </form>
          </div>
          {/* Preview */}
          <div className="md:w-1/2 bg-gray-900 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Preview</h2>
            <div className="bg-gray-800 p-4 rounded-lg">
              <img
                src={form.image || 'https://via.placeholder.com/150'}
                alt="Profile Image"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-center">{form.name || 'Your Name'}</h3>
              <p className="text-center text-green-300">{form.bio || 'Your bio will appear here...'}</p>
              <div className="mt-4">
                <h4 className="text-xl font-bold mb-2">Links</h4>
                {form.links.split(',').map((link, index) => (
                  <p key={index} className="text-green-300">
                    <a href={link.trim()} target="_blank" rel="noopener noreferrer">{link.trim()}</a>
                  </p>
                ))}
              </div>
              <div className="mt-4">
                <h4 className="text-xl font-bold mb-2">Social Links</h4>
                {form.socialLinks.split(',').map((link, index) => (
                  <p key={index} className="text-green-300">
                    <a href={link.trim()} target="_blank" rel="noopener noreferrer">{link.trim()}</a>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
