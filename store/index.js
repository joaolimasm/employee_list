export const state = () => ({
  employees: [
    { id: 1, name: 'João Silva', position: 'Desenvolvedor Full-stack', description: 'Desenvolvimento web e mobile', photo: 'https://randomuser.me/api/portraits/men/1.jpg', hashtags: ['#dev', '#fullstack'] },
    { id: 2, name: 'Maria Santos', position: 'Designer UX/UI', description: 'Design de interfaces de usuário', photo: 'https://randomuser.me/api/portraits/women/2.jpg', hashtags: ['#design', '#uxui'] },
    { id: 3, name: 'Carlos Oliveira', position: 'Gerente de Projetos', description: 'Coordenação e gestão de projetos', photo: 'https://randomuser.me/api/portraits/men/3.jpg', hashtags: ['#gerenteprojetos'] },
    { id: 4, name: 'Ana Souza', position: 'Engenheira de Qualidade', description: 'Garantia de qualidade de software', photo: 'https://randomuser.me/api/portraits/women/4.jpg', hashtags: ['#engenhariadequalidade'] },
    { id: 5, name: 'Fernando Costa', position: 'Engenheiro de DevOps', description: 'Especialista em infraestrutura de TI', photo: 'https://randomuser.me/api/portraits/men/5.jpg', hashtags: ['#devops'] },
    { id: 6, name: 'Rafael Pereira', position: 'Analista de Marketing Digital', description: 'Estratégias de marketing online', photo: 'https://randomuser.me/api/portraits/men/6.jpg', hashtags: ['#marketingdigital'] },
    { id: 7, name: 'Patrícia Oliveira', position: 'Especialista em Recursos Humanos', description: 'Gestão de recursos humanos', photo: 'https://randomuser.me/api/portraits/women/7.jpg', hashtags: ['#recursoshumanos'] },
    { id: 8, name: 'Juliana Costa', position: 'Advogada Trabalhista', description: 'Consultoria jurídica trabalhista', photo: 'https://randomuser.me/api/portraits/women/8.jpg', hashtags: ['#advogadatrabalhista'] },
    { id: 9, name: 'Pedro Santos', position: 'Médico Cardiologista', description: 'Especialista em saúde cardiovascular', photo: 'https://randomuser.me/api/portraits/men/9.jpg', hashtags: ['#medicocardiologista'] },
    { id: 10, name: 'Mariana Almeida', position: 'Professora Universitária', description: 'Docência e pesquisa acadêmica', photo: 'https://randomuser.me/api/portraits/women/10.jpg', hashtags: ['#professoruniversitario'] },
    { id: 11, name: 'Lucas Fernandes', position: 'Analista Financeiro', description: 'Análise e planejamento financeiro', photo: 'https://randomuser.me/api/portraits/men/11.jpg', hashtags: ['#analistafinanceiro'] },
    { id: 12, name: 'Isabela Lima', position: 'Arquiteta', description: 'Projetos arquitetônicos e urbanísticos', photo: 'https://randomuser.me/api/portraits/women/12.jpg', hashtags: ['#arquiteta'] },
    { id: 13, name: 'Gabriel Oliveira', position: 'Analista de Sistemas', description: 'Desenvolvimento e manutenção de sistemas', photo: 'https://randomuser.me/api/portraits/women/13.jpg', hashtags: ['#analistadesistemas'] },
    { id: 14, name: 'Aline Martins', position: 'Bióloga', description: 'Pesquisa e análise biológica', photo: 'https://randomuser.me/api/portraits/women/14.jpg', hashtags: ['#biologa'] },
    { id: 15, name: 'Rodrigo Costa', position: 'Consultor de Vendas', description: 'Estratégias de vendas e atendimento ao cliente', photo: 'https://randomuser.me/api/portraits/men/15.jpg', hashtags: ['#consultordevendas'] },
    { id: 16, name: 'Carla Oliveira', position: 'Coordenadora Pedagógica', description: 'Gestão acadêmica e pedagógica', photo: 'https://randomuser.me/api/portraits/women/16.jpg', hashtags: ['#coordenadorapedagogica'] },
    { id: 17, name: 'Paulo Souza', position: 'Chef de Cozinha', description: 'Gestão de cozinha e preparo de alimentos', photo: 'https://randomuser.me/api/portraits/men/17.jpg', hashtags: ['#chefdecozinha'] },
    { id: 18, name: 'Larissa Silva', position: 'Enfermeira', description: 'Cuidados de saúde e assistência ao paciente', photo: 'https://randomuser.me/api/portraits/women/18.jpg', hashtags: ['#enfermeira'] },
    { id: 19, name: 'Ricardo Santos', position: 'Engenheiro Civil', description: 'Projeto e execução de obras civis', photo: 'https://randomuser.me/api/portraits/men/19.jpg', hashtags: ['#engenheirocivil'] },
    { id: 20, name: 'Amanda Costa', position: 'Farmacêutica', description: 'Análise e dispensação de medicamentos', photo: 'https://randomuser.me/api/portraits/women/20.jpg', hashtags: ['#farmaceutica'] },
    { id: 21, name: 'Marcos Oliveira', position: 'Geólogo', description: 'Estudos e análises geológicas', photo: 'https://randomuser.me/api/portraits/men/21.jpg', hashtags: ['#geologo'] },
    { id: 22, name: 'Camila Fernandes', position: 'Nutricionista', description: 'Planejamento de dietas e nutrição clínica', photo: 'https://randomuser.me/api/portraits/women/22.jpg', hashtags: ['#nutricionista'] },
    { id: 23, name: 'Gustavo Lima', position: 'Psicólogo Clínico', description: 'Avaliação psicológica e terapia individual', photo: 'https://randomuser.me/api/portraits/men/23.jpg', hashtags: ['#psicologoclinico'] },
    { id: 24, name: 'Letícia Almeida', position: 'Redatora Publicitária', description: 'Produção de conteúdo e copywriting', photo: 'https://randomuser.me/api/portraits/women/24.jpg', hashtags: ['#redatorapublicitaria'] },
    { id: 25, name: 'Mateus Costa', position: 'Técnico em Informática', description: 'Suporte e manutenção de sistemas', photo: 'https://randomuser.me/api/portraits/men/25.jpg', hashtags: ['#tecnicodeinformatica'] },
    { id: 26, name: 'Cristina Santos', position: 'Tradutora', description: 'Tradução de textos e documentos', photo: 'https://randomuser.me/api/portraits/women/26.jpg', hashtags: ['#tradutora'] },
    { id: 27, name: 'André Oliveira', position: 'Instrutor de Fitness', description: 'Treinamento físico e condicionamento', photo: 'https://randomuser.me/api/portraits/men/27.jpg', hashtags: ['#instrutordefitness'] },
    { id: 28, name: 'Laura Silva', position: 'Estilista', description: 'Design de moda e criação de vestuário', photo: 'https://randomuser.me/api/portraits/women/28.jpg', hashtags: ['#estilista'] },
    { id: 29, name: 'Roberto Costa', position: 'Cientista de Dados', description: 'Análise de dados e modelagem estatística', photo: 'https://randomuser.me/api/portraits/men/29.jpg', hashtags: ['#cientistadedados'] },
    { id: 30, name: 'Fernanda Oliveira', position: 'Terapeuta Ocupacional', description: 'Reabilitação e assistência a pessoas com necessidades especiais', photo: 'https://randomuser.me/api/portraits/women/30.jpg', hashtags: ['#terapeutaocupacional'] },
    { id: 31, name: 'Luciana Santos', position: 'Engenheira de Produção', description: 'Otimização de processos industriais', photo: 'https://randomuser.me/api/portraits/women/31.jpg', hashtags: ['#engenheiradeproducao'] },
    { id: 32, name: 'Guilherme Lima', position: 'Advogado Penalista', description: 'Consultoria jurídica penal', photo: 'https://randomuser.me/api/portraits/men/32.jpg', hashtags: ['#advogadopenalista'] },
    { id: 33, name: 'Bianca Costa', position: 'Analista de Marketing', description: 'Planejamento estratégico de marketing', photo: 'https://randomuser.me/api/portraits/women/33.jpg', hashtags: ['#analistademarketing'] },
    { id: 34, name: 'Marcelo Oliveira', position: 'Professor de Educação Física', description: 'Ensino e orientação em atividades físicas', photo: 'https://randomuser.me/api/portraits/women/34.jpg', hashtags: ['#professordeeducacaofisica'] },
    { id: 35, name: 'Camila Rodrigues', position: 'Bióloga Marinha', description: 'Análise de organismos aquáticos', photo: 'https://randomuser.me/api/portraits/women/35.jpg', hashtags: ['#biologamarinha'] },
    { id: 36, name: 'Carlos Andrade', position: 'Contador', description: 'Auditoria de demonstrações contábeis', photo: 'https://randomuser.me/api/portraits/men/36.jpg', hashtags: ['#contador'] },
    { id: 37, name: 'Gustavo Lima', position: 'Enfermeiro', description: 'Coordenação de equipes de enfermagem', photo: 'https://randomuser.me/api/portraits/men/37.jpg', hashtags: ['#enfermeiro'] },
    { id: 38, name: 'Silvia Santos', position: 'Psicóloga', description: 'Avaliação psicológica e atendimento clínico', photo: 'https://randomuser.me/api/portraits/women/38.jpg', hashtags: ['#psicologa'] },
    { id: 39, name: 'Leandro Almeida', position: 'Analista de Sistemas', description: 'Desenvolvimento e manutenção de sistemas', photo: 'https://randomuser.me/api/portraits/men/39.jpg', hashtags: ['#analistadesistemas'] },
    { id: 40, name: 'Bruna Costa', position: 'Analista de Qualidade', description: 'Garantia de qualidade de software', photo: 'https://randomuser.me/api/portraits/women/40.jpg', hashtags: ['#analistadequalidade'] },
    { id: 41, name: 'Renato Oliveira', position: 'Gerente de Projetos', description: 'Coordenação e gestão de projetos', photo: 'https://randomuser.me/api/portraits/men/41.jpg', hashtags: ['#gerenteprojetos'] },
    { id: 42, name: 'Vanessa Santos', position: 'Advogada Trabalhista', description: 'Consultoria jurídica trabalhista', photo: 'https://randomuser.me/api/portraits/women/42.jpg', hashtags: ['#advogadatrabalhista'] },
    { id: 43, name: 'Thiago Almeida', position: 'Médico', description: 'Especialista em saúde cardiovascular', photo: 'https://randomuser.me/api/portraits/men/43.jpg', hashtags: ['#medico'] },
    { id: 44, name: 'Julia Lima', position: 'Professora', description: 'Docência e pesquisa acadêmica', photo: 'https://randomuser.me/api/portraits/women/44.jpg', hashtags: ['#professora'] },
    { id: 45, name: 'Gabriel Rodrigues', position: 'Desenvolvedor', description: 'Desenvolvimento web e mobile', photo: 'https://randomuser.me/api/portraits/men/45.jpg', hashtags: ['#desenvolvedor'] },
    { id: 46, name: 'Amanda Oliveira', position: 'Designer', description: 'Design de interfaces de usuário', photo: 'https://randomuser.me/api/portraits/women/46.jpg', hashtags: ['#designer'] },
    { id: 47, name: 'Rafael Silva', position: 'Especialista em Marketing', description: 'Estratégias de marketing online', photo: 'https://randomuser.me/api/portraits/men/47.jpg', hashtags: ['#especialistaemmarketing'] },
    { id: 48, name: 'Fernanda Costa', position: 'Recursos Humanos', description: 'Gestão de recursos humanos', photo: 'https://randomuser.me/api/portraits/women/48.jpg', hashtags: ['#recursoshumanos'] },
    { id: 49, name: 'Bruno Santos', position: 'Analista', description: 'Análise e planejamento financeiro', photo: 'https://randomuser.me/api/portraits/men/49.jpg', hashtags: ['#analista'] },
    { id: 50, name: 'Elisa Lima', position: 'Arquiteta', description: 'Projetos arquitetônicos e urbanísticos', photo: 'https://randomuser.me/api/portraits/women/50.jpg', hashtags: ['#arquiteta'] }
  ]
});

export const getters = {
  getEmployees: (state) => state.employees,
  getEmployeeById: (state) => (id) => state.employees.find(employee => employee.id === parseInt(id)),
  getEmployeeHashtags: (state) => (id) => {
    const employee = state.employees.find(emp => emp.id === parseInt(id));
    return employee ? employee.hashtags : [];
  }
};
