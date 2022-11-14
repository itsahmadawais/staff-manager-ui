import React from 'react'
import { Table } from 'react-bootstrap';
import ChartCard from './ChartCard';
import StatsCard from './StatsCard';
import { Avatar } from '../UI';

export default function DashbaordContent() {
  const statsData = [
    {
      title: 'Total Employees',
      amount: '620',
      type: 'Employee'
    },
    {
      title: 'Shifts this Week',
      amount: '50',
      type: 'Shift'
    },
    {
      title: 'Assigned',
      amount: '31',
      type: 'Shift'
    },
    {
      title: 'Unassigned',
      amount: '19',
      type: 'Shift'
    }
  ];

  const chartColors = [
    '#04b004',
    '#e8cd1b',
    '#0f9ec2',
    '#E34234'
  ];

  const chartData = {
    labels: ['Confirmed', 'Awaiting', 'Failed to Confirm', 'Declined'],
    datasets: [
      {
        data: [12, 19, 3, 5],
        backgroundColor: chartColors
      }
    ]
  };

  const todaysShifts = [
    {
      id: '1',
      image: '/images/user.jpg',
      name: 'Aamir Shahzad',
      startTime: '12:00',
      endTime: '17:00'
    },
    {
      id: '2',
      image: '/images/user.jpg',
      name: 'Aamir Shahzad',
      startTime: '12:00',
      endTime: '17:00'
    },
    {
      id: '3',
      image: '/images/user.jpg',
      name: 'Aamir Shahzad',
      startTime: '12:00',
      endTime: '17:00'
    },
    {
      id: '4',
      image: '/images/user.jpg',
      name: 'Aamir Shahzad',
      startTime: '12:00',
      endTime: '17:00'
    }
  ];

  const employees = [
    {
      id: '1',
      image: '/images/user.jpg',
      name: 'Aamir Shahzad'
    },
    {
      id: '2',
      image: '/images/user.jpg',
      name: 'Aamir Shahzad'
    },
    {
      id: '3',
      image: '/images/user.jpg',
      name: 'Aamir Shahzad'
    },
    {
      id: '4',
      image: '/images/user.jpg',
      name: 'Aamir Shahzad'
    }
  ];

  return (
    <div className='home-content py-1'>
      <div className='row g-0'>
        <div className='col-md-5'>
          <div className='d-flex flex-wrap'>
            {
              statsData.map((item, index) => {
                return <StatsCard key={index} data={item} />
              })
            }
          </div>
        </div>
        <div className='col-md-7 ps-3'>
          <ChartCard chartData={chartData} chartColors={chartColors} />
        </div>
      </div>
      <div className='row g-0 mt-4'>
        <div className='col-md-6 pe-4'>
          <h5>Today's Shifts</h5>
          <div className='list-items-wrap p-3 custom-scrollbar'>
            <Table responsive>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Employee</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                </tr>
              </thead>
              <tbody>
                {
                  todaysShifts.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>
                          <Avatar image={item.image} />
                        </td>
                        <td>
                          {item.name}
                        </td>
                        <td>
                          {item.startTime}
                        </td>
                        <td>
                          {item.endTime}
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </div>
        </div>
        <div className='col-md-6'>
          <h5>Employees</h5>
          <div className='list-items-wrap p-3 custom-scrollbar'>
            <Table responsive>
              <tbody>
                {
                  employees.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>
                          <Avatar image={item.image} />
                        </td>
                        <td>
                          {item.name}
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
