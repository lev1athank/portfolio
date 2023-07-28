import style from './about.module.scss'

const About = () => {
	return (
		<>
			<div className={style.content}>
				<h1>Обо мне</h1>
				<div>
					Я Пархоменко Никита, на данный момент проживаю в городе Магнитогорск, учусь на 2 курсе многопрофильного колледжа. Являюсь full-stack разработчиком. Изучаю такой фреймворк как React в скоре перейду на Next JS. На этом сайте буду выкладывать свои проекты. Также некоторые мои проекты можно найти на моем <a href="https://github.com/lev1athank">GitHub</a>
				</div>
			</div>

		</>
	)
}

export default About