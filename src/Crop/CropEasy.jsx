import { Cancel } from '@mui/icons-material';
import CropIcon from '@mui/icons-material/Crop';
import { Box, Button, DialogActions, DialogContent, Slider, Typography } from '@mui/material';
import { position } from 'html2canvas/dist/types/css/property-descriptors/position';
import React from 'react';
import { useState } from 'react';

const CropEasy = ({photoURL, setOpenCrop}) => {
  const [crop, setCrop] = useState({x:0, y:0})
  const [zoom, setZoom] = useState(1)
  const [rotation, setRotation] = useState(1)

  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

  const cropComplete = (croppedArea, croppedAreaPixels)=>{
    setCroppedAreaPixels(croppedAreaPixels)
  }
  return <>
    <DialogContent dividers 
    sx={{
        background:"#333",
        position:"relative",
        height:400,
        width:"auto",
        minWidth: {sm:500},
    }}>
        <Cropper 
        image={photoURL}
        crop={crop}
        aspect={1}
        onCropChange={setCrop}
        onCropComplete={cropComplete}
        />
    </DialogContent>
    <DialogActions sx={{flexDirection:"column", mx:3, my: 2}}>
        <Box sx={{width: "100%", mb: 1}}>
            <Box>
            <Typography>
                Zoom: {zoomPercent(zoom)}
            </Typography>
            <Slider 
            valueLabelDisplay='auto'
            valueLabelformat={zoomPercent}
            min={1}
            max={3}
            step={0.1}
            value={zoom} 
            onChange={(e, zoom)=> setZoom(zoom)}
            />
            </Box>
            <Box>
            <Typography>
                Rotation: {rotation}
            </Typography>
            <Slider 
            valueLabelDisplay='auto'
            min={0}
            max={360}
           
            value={rotation} 
            onChange={(e, rotation)=> setRotation(rotation)}
            />
            </Box>
            <Box 
            sx={{
                display:'flex',
                gap:2,
                flexWrap: "wrap",
            }
            }>
                <Button
                variant='outlined'
                startIcon={<Cancel />}
                onClick={()=>setOpenCrop(false)}
                >
                    Cancel
                </Button>
                <Button
                variant='contained'
                startIcon={<CropIcon />}
                onClick={cropImage}
                >
                    Crop
                </Button>
            </Box>
        </Box>
    </DialogActions>
    </>
  
};

export default CropEasy;

const zoomPercent = (value)=> {
    return `${Math.round(value*100)}%`
}