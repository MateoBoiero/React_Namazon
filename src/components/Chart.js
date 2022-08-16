import React from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Title: 'Harry Poter ',
        Length: '2hr',
        Rating: '5',
        Categories: ['Aventura','Fantasia'],
        Awards: '4'
    },
    {
        Title: 'Batman',
        Length: '2.10hr',
        Rating: '5',
        Categories: ['Aventura','Fantasia'],
        Awards: '3'
    },
    {
        Title: 'It(Eso)',
        Length: '2:40hr',
        Rating: '5',
        Categories: ['Terror','Comedia'],
        Awards: '1'
    },
    {
        Title: 'Piratas Del Caribe',
        Length: '1:20hr',
        Rating: '4.8',
        Categories: ['Drama','Acción'],
        Awards: '3'
    },
    
]


function Chart (){
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Duración</th>
                                <th>Rating</th>
                                <th>Género</th>
                                <th>Premios</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Título</th>
                                <th>Duración</th>
                                <th>Rating</th>
                                <th>Género</th>
                                <th>Premios</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;