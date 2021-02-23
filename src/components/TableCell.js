import React from 'react'

export default function TableCell(props) {
    return (
        <div class="table-cell">
            <table>
                <tr>
                    <td>Name:{props.movieName}</td>
                    <td>ID: {props.movieID}</td>
                    <td>Year: {props.movieYear}</td>
                </tr>
            </table>
        </div>
    )
}
