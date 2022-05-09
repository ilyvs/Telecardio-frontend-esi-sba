import React from 'react';
import AgeStat from './AgeStat';
import SexStat from './SexStat'

class AdminStat extends React.Component{
    render() {
        return(
            <div className='adminStat'>
                <AgeStat />
                <SexStat />
            </div>
        )
    }
}

export default AdminStat;