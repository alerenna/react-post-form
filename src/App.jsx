import { useState } from 'react'


function App() {

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    body: '',
    public: false
  })

  function handleFormData(e) {
    const value = e.target.value
    const key = e.target.name
    const type = e.target.type
    const checked = e.target.checked

    type === 'checkbox' ? checked : value

    setFormData((formData) => ({
      ...formData, [key]: value
    }))

  }


  return (
    <>
      <div className="container">

        {/* FORM */}
        <form>

          <div className="my-3">
            <label for="" class="form-label">Title</label>
            <input
              type="text"
              class="form-control"
              name="title"
              id="title"
              aria-describedby="titleHelperId"
              placeholder="Title"
              value={formData.title}
              onChange={handleFormData}
            />
          </div>


          <div className="my-3">
            <label for="" class="form-label">Author</label>
            <input
              type="text"
              class="form-control"
              name="author"
              id="author"
              aria-describedby="authorHelperId"
              placeholder="Author name"
              value={formData.author}
              onChange={handleFormData}
            />
          </div>

          <div className="my-3">
            <label for="" class="form-label">Body</label>
            <textarea
              type="text-area"
              class="form-control"
              name="body"
              id="body"
              aria-describedby="bodyHelperId"
              placeholder="Body"
              rows='4'
              value={formData.body}
              onChange={handleFormData}
            />
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              name="public"
              type="checkbox"
              value="Published"
              id="Published"
            />
            <label class="form-check-label" htmlFor=""> Published </label>
          </div>


        </form>
      </div>

      <div className="container d-flex align-items-center justify-content-center py-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-3">

          <div className="col d-flex">
            <div className="card">
              <div className="card-body">
                <h1>Title</h1>
                <h5>Author</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In eveniet aspernatur incidunt veritatis. Facere, fugiat beatae, neque iure corrupti consequuntur ut velit eius suscipit expedita commodi id deleniti, vero voluptas.</p>
              </div>
            </div>
          </div>

          <div className="col d-flex">
            <div className="card">
              <div className="card-body">
                <h1>Title</h1>
                <h5>Author</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In eveniet aspernatur incidunt veritatis. Facere, fugiat beatae, neque iure corrupti consequuntur ut velit eius suscipit expedita commodi id deleniti, vero voluptas.</p>
              </div>
            </div>
          </div>

          <div className="col d-flex">
            <div className="card">
              <div className="card-body">
                <h1>Title</h1>
                <h5>Author</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In eveniet aspernatur incidunt veritatis. Facere, fugiat beatae, neque iure corrupti consequuntur ut velit eius suscipit expedita commodi id deleniti, vero voluptas.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
