'use client';
import styles from './Table.module.css'
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Table() {

    const [users,setUsers] =useState([])

    useEffect(() => {

    });

    const loadUsers= () => {
      const result = axios.get("")
    }

return (
<table className={styles.table}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
)
}