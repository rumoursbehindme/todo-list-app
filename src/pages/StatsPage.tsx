import styled from 'styled-components';
import { useTodos } from '../hooks/useTodos';


const Holder = styled.section`
display: flex;
  flex-direction: column;
  gap: 18px;
`

const Title = styled.h2`
  margin: 0;
  font-size: 22px;
  letter-spacing: -0.02em;
  color: #f3f6ff;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 14px;
`

function StatsPage() {
    const { stats } = useTodos()
    return (
        <Holder>
            <Title>Stats</Title>
            <Grid>
              <div>
                Total = {stats.total}
              </div>
            </Grid>
            <Grid>
              <div>
                Active ={stats.active}
              </div>        
            </Grid>
            <Grid>
              <div>
                Completed = {stats.completed}
              </div>
            </Grid>
            <Grid>
              <div>
                Completion Rate = {stats.completionRate}
              </div>
            </Grid>
        </Holder>
    )
}
export default StatsPage;