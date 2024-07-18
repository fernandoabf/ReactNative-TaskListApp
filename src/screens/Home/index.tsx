import React, { useState } from 'react';
import { Alert, FlatList, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import Logo from '../../assets/images/Logo.svg';
import Plus from '../../assets/images/Plus.svg';
import Clipboard from '../../assets/images/Clipboard.svg';
import { styles } from "./styles";
import { Task } from "../../components/Task";
import { Counter } from "../../components/Counter";

export function Home() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [task, setTask] = useState('');
    const [checkCount, setCheckCount] = useState(0);

    function handleAddTask() {
        if (tasks.includes(task)) {
            Alert.alert('Essa tarefa já foi adicionada');
        } else if (task === '') {
            Alert.alert('Digite uma tarefa');
        } else {
            setTasks([...tasks, task]);
            setTask('');
        }
    }

    function handleRemoveTask(item: string, isChecked: boolean) {
        setTasks(oldTasks => oldTasks.filter(task => task !== item));

        if (isChecked) {
            setCheckCount(oldCount => Math.max(oldCount - 1, 0));
        }
    }

    function handleCheckCount(check: boolean) {
        setCheckCount(oldCount => check ? oldCount + 1 : oldCount - 1);
    }

    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Logo style={styles.logo} />

                <View style={styles.addTaskContainer}>
                    <TextInput
                        style={styles.addTaskBox}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor='#808080'
                        onChangeText={setTask}
                        value={task}
                    />

                    <TouchableOpacity style={styles.addTaskButton} onPress={handleAddTask}>
                        <Plus />
                    </TouchableOpacity>
                </View>

                <View style={styles.optionsContainer}>
                    <View style={styles.optionsTextBox}>
                        <Text style={styles.optionCreateText}>
                            Criadas
                        </Text>
                        <Counter count={tasks.length} />
                    </View>

                    <View style={styles.optionsTextBox}>
                        <Text style={styles.optionConcludeText}>
                            Concluídas
                        </Text>
                        <Counter count={checkCount} />
                    </View>
                </View>
            </View>

            <FlatList
                style={{ marginTop: 100 }}
                data={tasks}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Task
                        content={item}
                        onRemove={() => handleRemoveTask(item, tasks.includes(item))}
                        checkCount={handleCheckCount}
                    />
                )}

                ListEmptyComponent={() => (
                    <View style={styles.emptyListContainer}>
                        <View style={styles.emptyListLine} />
                        <Clipboard style={{ marginTop: 48 }} />
                        <Text style={styles.emptyListBoldText}>Você ainda não tem tarefas cadastradas</Text>
                        <Text style={styles.emptyListText}>Crie tarefas e organize seus itens a fazer</Text>
                    </View>
                )}
            />
        </View>
    );
}
