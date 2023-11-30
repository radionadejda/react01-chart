// Создайте приложение React, подключите к нему модуль графиков Chart (документацию можно найти здесь) для React и выведите график типа Pie на основную страницу (данные для графика можете использовать любые).

// import logo from "./logo.svg";
import "./App.css";
import { Chart } from "react-google-charts";

const tasks = [
	{
		title: "задача 1",
		status: "в процессе",
		priority: "высокий",
		startDate: "2023-10-01",
		endDate: "2023-10-10"
	},
	{
		title: "задача 2",
		status: "выполнено",
		priority: "высокий",
		startDate: "2023-10-01",
		endDate: "2023-10-05"
	},
	{
		title: "задача 3",
		status: "в процессе",
		priority: "низкий",
		startDate: "2023-10-10",
		endDate: "2023-11-10"
	},
	{
		title: "задача 4",
		status: "выполнено",
		priority: "средний",
		startDate: "2023-09-01",
		endDate: "2023-10-01"
	},
	{
		title: "задача 5",
		status: "в процессе",
		priority: "высокий",
		startDate: "2023-10-01",
		endDate: "2023-10-10"
	}
];

// обрабатываем задачи для диаграммы по статусу выполнения
// задаем нулевые исходные значения для количества задач
const taskStatusProcess = ["в процессе", 0];
const taskStatusDone = ["выполнено", 0];
// пересчитываем коичество задач с каждым статусом
for (const task of tasks) {
	if (task.status === "в процессе") {
		taskStatusProcess[1]++;
	} else if (task.status === "выполнено") {
		taskStatusDone[1]++;
	}
}
// формируем данные для диаграммы
export const dataStatus = [["Статус", "Количество"], taskStatusProcess, taskStatusDone];
// формируем опции для диаграммы
const color1 = "#dd13e3";
const color2 = "#2ade39";
const color3 = "#ff8e1d";

export const optionsStatus = {
	title: "Задачи по выполнению",
	legend: "",
	slices: {
		0: { color: color2, offset: 0.2 },
		1: { color: color1 }
	}
};

// обрабатываем задачи для диаграммы по приоритету
// задаем нулевые исходные значения для количества задач
const taskPriotityHigh = ["высокий", 0];
const taskPriotityLow = ["средний", 0];
const taskPriotityMed = ["низкий", 0];
// пересчитываем коичество задач с каждым приоритетом
for (const task of tasks) {
	if (task.priority === "высокий") {
		taskPriotityHigh[1]++;
	} else if (task.priority === "средний") {
		taskPriotityMed[1]++;
	} else if (task.priority === "низкий") {
		taskPriotityLow[1]++;
	}
}
// формируем данные для диаграммы
export const dataPriority = [["Приоритет", "Количество"], taskPriotityHigh, taskPriotityMed, taskPriotityLow];
// формируем опции для диаграммы
export const optionsPriority = {
	title: "Задачи по приоритету",
	legend: "",
	slices: { 0: { color: color1, offset: 0.1 }, 1: { color: color2, offset: 0.1 }, 2: { color: color3 } },
	is3D: true
};

// выводим все на страницу
export function App() {
	return (
		<div className="charts">
			<div>
				<Chart chartType="PieChart" data={dataStatus} options={optionsStatus} width={"100%"} height={"50vh"} />
			</div>
			<div>
				<Chart chartType="PieChart" data={dataPriority} options={optionsPriority} width={"100%"} height={"50vh"} />
			</div>
		</div>
	);
}

export default App;
