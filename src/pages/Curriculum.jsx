import React, { useState } from 'react'
import { Container, Header, Divider, Grid, Card, Button, Image } from 'semantic-ui-react'
import MediaQuery from 'react-responsive'
import { Document, Page, pdfjs } from 'react-pdf'
import file from '../resources/curriculum.pdf'

const Curriculum = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

  const [isShown, setIsShown] = useState(false)
  const link = new URL('https://github.com/CatKinKitKat/curriculum/raw/master/curriculum.pdf')

  const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true
  }

  const [numPages, setNumPages] = useState(null)

  const onDocumentLoadSuccess = ({ numPages: nextNumPages }) => {
    setNumPages(nextNumPages)
  }

  return (
    <Container>
      <Header size="huge">
        Curriculum
      </Header>
      <Divider />
      <MediaQuery minWidth={695}>
        <Grid centered>
          <Grid.Column width={12}>
            <Card fluid>
              <Card.Content>
                <Card.Header>Curriculum Vitae</Card.Header>
                <Card.Meta>Co-Worker</Card.Meta>
                <Card.Description>
                  This is my CV, where I
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button centered fluid
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              href={link} target='_blank'
            >Download CV</Button>
            {isShown && (
              <Card />
            )}
          </Grid.Column>
        </Grid>
      </MediaQuery>
      <MediaQuery maxWidth={695}>
        <Card fluid>
          <Card.Content>
            <Card.Header>Curriculum Vitae</Card.Header>
            <Card.Meta>Co-Worker</Card.Meta>
            <Card.Description>
              This is my CV, where I
            </Card.Description>
          </Card.Content>
        </Card>
        <Button centered fluid
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          href={link} target='_blank'
        >Download CV</Button>
        {isShown && (
          <Card />
        )}
      </MediaQuery>
      <Grid centered>
        <Grid.Column>
          <Card fluid>
            <Card.Content>
              <Card.Header>Live View</Card.Header>
            </Card.Content>
            <Document
              as={Image}
              file={file}
              onLoadSuccess={onDocumentLoadSuccess}
              options={options}
            >
              {Array.apply(null, Array(numPages))
                .map((_x, i) => i + 1)
                // eslint-disable-next-line react/jsx-key
                .map(page => <Page pageNumber={page} />)}
            </Document>
          </Card>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default Curriculum
