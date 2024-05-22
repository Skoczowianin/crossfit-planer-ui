import React from 'react'
import "./tempalte.css" ;
const FlexExample = () => {
  return (
    <div>
        <div className="tasklist">
        <div className="tasklist-task tasklist-header">
          <div className="tasklist-name  tasklist-header">Title</div>
          <div className="tasklist-description tasklist-header">Description</div>
          <div className="tasklist-edit  tasklist-header">Action</div>
        </div>

        <div className="tasklist-task">
          <div className="tasklist-name">blbalbalblaba</div>
          <div className="tasklist-description">na juz</div>
        <div className="tasklist-edit"><button>edit</button></div>
        </div>
        <div className="tasklist-task">
          <div className="tasklist-name">blbalbalblaba</div>
          <div className="tasklist-description">na juz</div>
        <div className="tasklist-edit"><button>edit</button></div>
        </div>
        <div className="tasklist-task">
          <div className="tasklist-name">blbalbalblaba</div>
          <div className="tasklist-description">na juz</div>
        <div className="tasklist-edit"><button>edit</button></div>
        </div>
        <div className="tasklist-task">
          <div className="tasklist-name">blbalbalblaba</div>
          <div className="tasklist-description">na juz</div>
        <div className="tasklist-edit"><button>edit</button></div>
        </div>
        <div className="tasklist-task">
          <div className="tasklist-name">blbalbalblaba</div>
          <div className="tasklist-description">na juz</div>
        <div className="tasklist-edit"><button>edit</button></div>
        </div>
      </div>
    </div>
  )
}

export default FlexExample