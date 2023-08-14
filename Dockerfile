
FROM python:3.11.4


WORKDIR /app


COPY . /app


RUN pip install -r requirements.txt


EXPOSE 80


ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_ENV=production


CMD ["python3", "app.py"]