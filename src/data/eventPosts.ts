export interface EventPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    image: string;
    slug: string;
    category: string;
  }
  
  export const eventPosts: EventPost[] = [
    {
      id: 'hannibal-lecture',
      title: "Floating Worlds",
      excerpt: "A journey into the world of architecture",
      date: "July 3, 2025",
      image: "assets/images/hannibal-lecture-1.jpg",
      slug: "/events/hannibal-lecture",
      category: "Architecture",
    }
  , {
      id: 'hannibal-lecture-2',
      title: "Example event 2",
      excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      date: "July 10, 2025",
      image: "https://placehold.co/1200x1200",
      slug: "/events/hannibal-lecture-2",
      category: "Arts",
    }
    , {
      id: 'hannibal-lecture-3',
      title: "Example event 3",
      excerpt: "Lorem ipsum dolor sit amet ",
      date: "July 17, 2025",
      image: "https://placehold.co/1200x1200",
      slug: "/events/hannibal-lecture-3",
      category: "Story-telling",
    }
  ];
  
  // Helper function to get a event post by slug
  export const getEventPostBySlug = (slug: string): EventPost | undefined => {
    return eventPosts.find(post => post.slug === slug);
  };
  
  // Helper function to get all event posts
  export const getAllEventPosts = (): EventPost[] => {
    return [...eventPosts];
  };
  
  // Get all unique categories from event posts
  export const categories = Array.from(
    new Set(eventPosts.map(post => post.category))
  ).sort();
  
  // Helper function to get posts by category
  export const getPostsByCategory = (category: string): EventPost[] => {
    return eventPosts.filter(post => post.category === category);
  };
  