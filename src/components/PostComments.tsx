const PostComments = () => (
  // TODO! extract to env
  <section
    ref={elem => {
      if (!elem) {
        return
      }
      let script = document.createElement('script')
      script.setAttribute('src', 'https://utteranc.es/client.js')
      script.setAttribute('repo', 'cpannwitz/cpannwitz.github.io')
      script.setAttribute('issue-term', 'title')
      // script.setAttribute("label", "blog-comment");
      script.setAttribute('theme', 'photon-dark')
      script.setAttribute('crossorigin', 'anonymous')
      script.setAttribute('async', 'true')
      elem.appendChild(script)
    }}
  />
)

export default PostComments
