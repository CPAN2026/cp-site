import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Servicos from '@/components/Servicos';
import Numeros from '@/components/Numeros';
import PropostaValor from '@/components/PropostaValor';
import ComoFunciona from '@/components/ComoFunciona';
import QuemSomos from '@/components/QuemSomos';
import PalavraFundador from '@/components/PalavraFundador';
import Credibilidade from '@/components/Credibilidade';
import DepoimentosVideo from '@/components/DepoimentosVideo';
import FAQ from '@/components/FAQ';
import CTAFinal from '@/components/CTAFinal';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Servicos />
        <Numeros />
        <PropostaValor />
        <ComoFunciona />
        <QuemSomos />
        <PalavraFundador />
        <Credibilidade />
        <DepoimentosVideo />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollReveal />
    </>
  );
}
