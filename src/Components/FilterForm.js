import React from 'react';

class FilterForm extends React.Component{

    runUpdateFilter = ()=>{
        // console.log('running update filter');
        let filterString = document.getElementById('filter').value;
        this.props.changeFilter(filterString);
        // document.getElementById('fliter').value = '';
    };

    clearFilter = ()=>{
        document.getElementById('filter').value = '';
        this.props.changeFilter('');
    };

    render() {
        return (
            <div className='filterForm'>
                <input type='text' id='filter' />
                <button onClick={this.runUpdateFilter}>SUBMIT</button>
                <button onClick={this.clearFilter}>CLEAR</button>
            </div>
        )
    }
}

export default FilterForm;
