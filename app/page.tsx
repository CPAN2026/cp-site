import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Numeros from '@/components/Numeros';
import PropostaValor from '@/components/PropostaValor';
import ComoFunciona from '@/components/ComoFunciona';
import QuemSomos from '@/components/QuemSomos';
import CTAWhatsApp from '@/components/CTAWhatsApp';
import Credibilidade from '@/components/Credibilidade';
import Servicos from '@/components/Servicos';
import Depoimentos from '@/components/Depoimentos';
import CTAFinal from '@/components/CTAFinal';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Numeros />
      <PropostaValor />
      <ComoFunciona />
      <QuemSomos />
      <CTAWhatsApp />
      <Credibilidade />
      <Servicos />
      <Depoimentos />
      <CTAFinal />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
