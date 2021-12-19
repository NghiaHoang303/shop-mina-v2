import * as React from 'react';
import { Link } from 'react-router-dom';

export interface TopNavRight {}

export default function TopNavRight(props: TopNavRight) {
  return (
    <div>
      <ul>
        <li>
          <a href="#">shop</a>
        </li>
        <li>
          <a href="#">shop</a>
        </li>{' '}
        <li>
          <a href="#">shop</a>
        </li>{' '}
        <li>
          <a href="#">Cart</a>
        </li>
      </ul>
    </div>
  );
}
