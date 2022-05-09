import React from 'react';
import ShowMedicament from './ShowMedicament';
class List_medicament extends React.Component {
    styles = {
        'List_medicament': {
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
            width: '100%',
            margin: 'auto',
            marginBottom: '30px',
            padding: '10px'
        }
    }

    render() {
        const listMedoc =  this.props.liste_medicament;
        console.log(listMedoc);
        const listeMedoc = listMedoc.map((myMedoc)=> <ShowMedicament medocItem = {myMedoc}/>)  
        return(
            <div className='List_medicament' style={this.styles.List_medicament}>
                {listeMedoc}  
            </div>
        )
    }
}

export default List_medicament;