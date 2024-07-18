import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import BlankCheck from '../../assets/images/blankCheck.svg';
import Checked from '../../assets/images/Checked.svg';
import Layer from '../../assets/images/Layer.svg';
import { styles } from './styles';

type TaskProps = {
    content: string;
    onRemove?: () => void;
    checkCount?: (check: boolean) => void;
};

export function Task({ content, onRemove, checkCount }: TaskProps) {
    const [isChecked, setIsChecked] = useState(false);

    function handleOnPress() {
        const newCheckState = !isChecked;
        setIsChecked(newCheckState);
        
        if (checkCount) {
            checkCount(newCheckState);
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleOnPress}>
                {isChecked ? <Checked /> : <BlankCheck />}
            </TouchableOpacity>

            <View style={styles.taskBox}>
                <Text style={isChecked ? styles.checkedTaskText : styles.uncheckedTaskText}>
                    {content}
                </Text>
            </View>

            <TouchableOpacity onPress={onRemove}>
                <Layer />
            </TouchableOpacity>
        </View>
    );
}
