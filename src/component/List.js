import React from "react";

const List = () => {
    const persons = [
        {
            id: 1,
            firstName: "Oluchi",
            lastname: "Chukwunweike"
        },

        {
            id: 2,
            firstName: "Vanessa",
            lastname: "Chukwunweike"
        },

        {
            id: 3,
            firstName: "Jessica",
            lastname: "Chukwunweike"
        },

        {
            id: 4,
            firstName: "Confidence",
            lastname: "Chukwunweike"
        }
    ]

    const mappedPersons = persons.map(person => (
            <table key= {person.firstName}>
                <tbody>
                    <tr>
                        <td>{person.firstName}</td>
                        <td>{person.lastname}</td>
                    </tr> 
                </tbody>
            </table>
    ))

    const names = ["Oluchi", "Malik", "Ife", "Favour"]
    const mappedNames = names.map ((name, index) => {
        return <h2 key={index}>{name}</h2>
    })
    return(
        <>
            {mappedNames}
            {/* {mappedPersons} */}
        </>
    )
} 

export default List