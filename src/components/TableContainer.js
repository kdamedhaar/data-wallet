import React, { Fragment, useMemo, useEffect, useState } from 'react'
import {
  useTable,
  useSortBy,
  useFilters,
  useExpanded,
  usePagination,
} from 'react-table'
import { Table, Row, Col, Button, Input } from 'reactstrap'
import { Filter, DefaultColumnFilter, SelectColumnFilter } from './filters'
import ConsumeCard from './ConsumeCard'
import './Component.css'

export default function TableContainer({ bgColor, data, ownAsset, showBuy }) {
  const columns = useMemo(
    () => [
      {
        Header: 'Dataset Name',
        accessor: 'name',
      },
      {
        Header: 'Author',
        accessor: 'author',
      },
      {
        Header: 'Datatoken Name',
        accessor: 'dtName',
      },
      {
        Header: 'Datatoken Symbol',
        accessor: 'symbol',
      },
      {
        Header: 'Price (in OCEAN)',
        accessor: 'price',
      },
      {
        // Make an expander cell
        Header: () => null, // No header
        id: 'ddo', // It needs an ID
        Cell: ({ row }) => (
          // Use Cell to render an expander for each row.
          // We can use the getToggleRowExpandedProps prop-getter
          // to build the expander.
          <span {...row.getToggleRowExpandedProps()}>
            {showBuy ? (
              row.isExpanded ? (
                '👇'
              ) : (
                <Button onClick={() => {}}>Buy</Button>
              )
            ) : (
              ''
            )}
          </span>
        ),
      },
    ],
    []
  )

  const renderRowSubComponent = (row) => {
    return <ConsumeCard data={row.original} bgColor={bgColor} />
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    visibleColumns,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: SelectColumnFilter },
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useFilters,
    useSortBy,
    useExpanded,
    usePagination
  )

  const generateSortingIndicator = (column) => {
    return column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''
  }

  const onChangeInSelect = (event) => {
    setPageSize(Number(event.target.value))
  }

  const onChangeInInput = (event) => {
    const page = event.target.value ? Number(event.target.value) - 1 : 0
    gotoPage(page)
  }

  function renderTable() {
    console.log('Postdata length - ', data.length)
    return (
      <Fragment>
        <Table bordered hover {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    <div {...column.getSortByToggleProps()}>
                      {column.render('Header')}
                      {generateSortingIndicator(column)}
                    </div>
                    <Filter column={column} />
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row)
              return (
                <Fragment key={row.getRowProps().key}>
                  <tr>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      )
                    })}
                  </tr>
                  {row.isExpanded && (
                    <tr>
                      <td colSpan={visibleColumns.length}>
                        {renderRowSubComponent(row)}
                      </td>
                    </tr>
                  )}
                </Fragment>
              )
            })}
          </tbody>
        </Table>

        <Row style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <Col md={3}>
            <Button
              color='primary'
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              {'<<'}
            </Button>
            <Button
              color='primary'
              onClick={previousPage}
              disabled={!canPreviousPage}
            >
              {'<'}
            </Button>
          </Col>
          <Col md={2} style={{ marginTop: 7 }}>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </Col>
          <Col md={4}>
            <Input
              type='number'
              min={1}
              style={{ width: 70 }}
              max={pageOptions.length}
              defaultValue={pageIndex + 1}
              onChange={onChangeInInput}
            />
          </Col>
          <Col md={3}>
            <Button color='primary' onClick={nextPage} disabled={!canNextPage}>
              {'>'}
            </Button>
            <Button
              color='primary'
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {'>>'}
            </Button>
          </Col>
        </Row>
      </Fragment>
    )
  }

  return data.length ? renderTable() : ''
}
