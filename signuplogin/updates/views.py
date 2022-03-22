from django.shortcuts import render

# Create your views here.
from rest_framework import generics,status
from rest_framework.decorators import api_view

from rest_framework.response import Response
from rest_framework.generics import get_object_or_404
# from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.response import Response

from .models import Patient
from .serializers import PatientSerializer





@api_view(['GET'])
def list(request):
        patient=Patient.objects.all()
        serializer=PatientSerializer(patient,many=True,context={"request":request})
        response_dict={"data":serializer.data}
        return Response(response_dict)


@api_view(['POST'])
def create(request):
        try:
            serializer=PatientSerializer(data=request.data,context={"request":request})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            dict_response={"error":False,"message":"Patient Data Saved Successfully"}
        except:
            dict_response={"error":True,"message":"Error During Saving Patient Data"}
        return Response(dict_response)

# class Patientretrieve(generics.GenericAPIView):
#     def get(self, request, pk=None):
@api_view(['GET'])
def retrieve(request,pk=None):
        queryset = Patient.objects.all()
        patient= get_object_or_404(queryset, name=pk)
        serializer = PatientSerializer(patient, context={"request": request})

        serializer_data = serializer.data

        return Response({"data": serializer_data})

#@api_view(['GET','POST'])
# def update(request, pk):
#     try:
#         model = Patient.objects.get(pk=pk)
#     except:
#         return Response('Not Found')
#     if request.method == 'PUT':
#         serializer = PatientSerializer(model, request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response ("Updated")
#         else:
#             return Response ("Failed")
@api_view(['GET','PUT'])
def update(request,pk=None):
    try:
        queryset=Company.objects.all()
        company=get_object_or_404(queryset,pk=pk)
        serializer=PatientSerializer(company,data=request.data,context={"request":request})
        serializer.is_valid(raise_exception=True)
        serializer.save()
        dict_response={"error":False,"message":"Successfully Updated Company Data"}
    except:
        dict_response={"error":True,"message":"Error During Updating Company Data"}

    return Response(dict_response)


@api_view(['DELETE'])
def delete(request, pk):
    item = Patient.objects.get(pk=pk)
    item.delete()
    return Response("Deleted")