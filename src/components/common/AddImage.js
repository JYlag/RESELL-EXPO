import React, { Component } from 'react';
import { Image } from 'react-native';
import PhotoUpload from 'react-native-photo-upload';

class AddImage extends Component {
    render() {
        return {
            <PhotoUpload>
                <Image>

                </Image>
            </PhotoUpload>
        };
    }
}

export default AddImage;