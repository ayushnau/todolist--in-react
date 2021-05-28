
import React, {useState} from 'react';

export const AddTodo = (props) => {
    const [title,settitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title|| !desc)
        {
            alert("title or description cannot be empty");
        }
        else{
       props.addTodo(title,desc)
      settitle("")
      setdesc("")
        }
    }
    return (
        <div className="container my-4 text-center">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">todo title</label>
                    <input type="text" value ={title} onChange={(e)=>{settitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                       
  </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">todo description</label>
                        <input type="text" value ={desc} onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc"/>
  </div>
                            <button type="submit" className="btn btn-primary btn-sm btn-success">Add todo </button>
</form>
                    </div>
    )
}
