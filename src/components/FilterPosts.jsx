function filterPosts(posts, searchQuery) {
  return posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
}

export default filterPosts;
