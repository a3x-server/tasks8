'use client'
import { OrbitronBlackFont } from '../services/fonts/fonts.ts'
import BoxInput from '../componentes/box-input.tsx'
import ToggleTheme from '../componentes/toggle-theme.tsx'
import Footer from '../componentes/footer.tsx'
import { Toaster } from 'sonner'

const Page = () => {
	return (
		<section className={ `${ OrbitronBlackFont.className } box-page` }>
			<Toaster />
			<ToggleTheme />
			<h1 className='h1'>Tasks Manager</h1>
			<BoxInput />
			<Footer />
		</section>
	)
}

export default Page
