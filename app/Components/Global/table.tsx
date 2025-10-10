"use client";

import React from "react";
import styles from "./table.module.css";

interface TableProps {
  headers: string[];
  data: Array<Record<string, any>>;
}

export default function Table({ headers, data }: TableProps) {
  return (
    <div className={styles.tableContainer}>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, colIndex) => (
                  <td key={colIndex}>{row[header]}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length}>No hay registros</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
