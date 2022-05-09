import React from 'react';

class ShowMedicament extends React.Component {

    styles = {
        'showMedicament': {
            display: 'flex',
            justifyContent: 'space-between'
        }
    }
    render() {
        console.log('hiii : ',this.props.medocItem)
        return(
            <div className='showMedicament' style={this.styles.showMedicament}>
                <div className='medoc__name'>
                    {this.props.medocItem}
                </div>
                <div className='medoc__dosage'>
                    {this.props.medocItem.dosage}
                </div>
            </div>
        );
    }
}

export default ShowMedicament;