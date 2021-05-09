import React, {useState} from 'react'
import './_Card.scss'
import { FormGroup } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from '@material-ui/core/Checkbox';
import PetsIcon from '@material-ui/icons/Pets';


export default function Card({dog}) {
    const [slide, setSlide] = useState({
        first: true,
        second: false,
        third: false,
        fourth: false,
    })

    function handleSlide(event){
        let { name } = event.target
        setSlide({
            first: false,
            second: false,
            third: false,
            fourth: false,
            [name]: true,
        })
    }

    return (
        <div className='cardContainer'>
            <div className='imageContainer'>
            <div className='frontImage'>
                <img  src={dog.url} alt={dog.breeds[0].reference_image_id} />
            </div>
            <div className='backImage'>
                <img src={dog.url} alt={dog.breeds[0].reference_image_id} />
            </div>
            </div>  
            <div className='infoContainer'>
                <h3>{dog.breeds[0].name || '-'}</h3>
                <div className={`info ${slide.first ? 'active': 'inactive'}`}>
                    <p><span>Country: </span>{dog.breeds[0].country_code || '-'}</p>                   
                    <p><span>Height (cm): </span>{dog.breeds[0].height.metric || '-'}</p>
                    <p><span>Weight (kg): </span>{dog.breeds[0].weight.metric || '-'}</p>
                </div>
                <div className={`info ${slide.second ? 'active': 'inactive'}`}>
                    <p><span>Breed Group: </span>{dog.breeds[0].breed_group || '-'}</p>
                    <p><span>Life Span: </span>{dog.breeds[0].life_span || '-'}</p>
                </div>  
                <div className={`info ${slide.third ? 'active': 'inactive'}`}>
                    <p><span>Temperament: </span>{dog.breeds[0].temperament || '-'}</p>
                </div> 
                <div className={`info ${slide.fourth ? 'active': 'inactive'}`}>
                    <p><span>Bred for: </span>{dog.breeds[0].bred_for || '-'}</p>
                </div>  
            </div>    
            <div className='formContainer'>
                    <FormGroup row>
                        <FormControlLabel
                            control={<Checkbox 
                                icon={<PetsIcon />}
                                checkedIcon={<PetsIcon style={{color: "#ff452b"}}/>}
                                checked={slide.first || false}
                                name='first'
                                onChange={handleSlide}
                                />}
                            className='paw'
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                icon={<PetsIcon />}
                                checkedIcon={<PetsIcon style={{color: "#ff452b"}}/>}
                                checked={slide.second || false}
                                name='second'
                                onChange={handleSlide}
                            />}
                            className='paw'
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                icon={<PetsIcon />}
                                checkedIcon={<PetsIcon style={{color: "#ff452b"}}/>}
                                checked={slide.third || false}
                                name='third'
                                onChange={handleSlide}
                            />}
                            className='paw'
                        />
                        <FormControlLabel
                            control={<Checkbox 
                                icon={<PetsIcon />}
                                checkedIcon={<PetsIcon style={{color: "#ff452b"}}/>}
                                checked={slide.fourth || false}
                                name='fourth'
                                onChange={handleSlide}
                            />}
                            className='paw'
                        />
                    </FormGroup> 
            </div>      
        </div>
    )
}