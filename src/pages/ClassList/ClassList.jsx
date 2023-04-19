import React, { useEffect, useState } from 'react'
import { getClassList } from '../../services/api-calls'
import { Link } from 'react-router-dom'

const ClassList = (props) => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        getClassList()
        .then(classData => setClasses(classData.results))
    }, [])
    return (
        <>
            <div>
                <h3>Class List</h3>
                <div className="icon-container">
                {classes.map((classTitle) => (
                  <Link key={classTitle.index} state={{ classTitle }} to='/class'>
                    <div id="classDiv" >
                        <img 
                            style={{ width: "100px", height: "100px" }}
                            src={`/images/${classTitle.name}.svg`} 
                            alt="class-logo"
                        />
                    {classTitle.name}
                </div>
            </Link>
          ))}
        </div>
      </div>
    </>
    )
}

export default ClassList