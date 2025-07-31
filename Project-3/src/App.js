import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

function App() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (newTask.trim() === '') return;
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask('');
    };

    const toggleTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="6">
                    <h1 className="text-center my-4">Todo List</h1>
                    <Form onSubmit={(e) => { e.preventDefault(); addTask(); }}>
                        <Form.Group controlId="formNewTask">
                            <Form.Control
                                type="text"
                                placeholder="Enter a new task"
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="success" type="submit" className="w-100 mt-3">
                            Add Task
                        </Button>
                    </Form>
                    <ListGroup className="mt-4">
                        {tasks.map((task, index) => (
                            <ListGroupItem key={index} className="d-flex justify-content-between align-items-center">
                                <span
                                    style={{
                                        textDecoration: task.completed ? 'line-through' : 'none',
                                    }}
                                >
                                    {task.text}
                                </span>
                                <div>
                                    <Button
                                        variant={task.completed ? "secondary" : "success"}
                                        size="sm"
                                        onClick={() => toggleTask(index)}
                                        className="mr-2"
                                    >
                                        {task.completed ? 'Undo' : 'Complete'}
                                    </Button>
                                    <Button variant="danger" size="sm" onClick={() => deleteTask(index)}>
                                        Delete
                                    </Button>
                                </div>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default App;